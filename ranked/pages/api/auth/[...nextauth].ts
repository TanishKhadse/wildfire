import NextAuth from "next-auth/next";

import { NextAuthOptions } from "next-auth"
import prisma from "@/app/lib/db";
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider  from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: "email", type: "text"},
                password: {label: "password ", type: "text"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing fields")
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                
                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid credentials")
                }
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials")

                }
                return user
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    pages: {
        signIn: '/'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async redirect({ url, baseUrl }) {
          // Allows relative callback URLs
          if (url.startsWith("/")) return `${baseUrl}${url}`
          // Allows callback URLs on the same origin
          else if (new URL(url).origin === baseUrl) return url
          return baseUrl
        },
    },
    

};

export default NextAuth(authOptions)