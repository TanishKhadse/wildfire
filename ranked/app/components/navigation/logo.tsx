'use client';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation"
// import { Inter } from '@next/font/google';


// const inter = Inter({
//   subsets: ['latin']
// })

export default function Logo() {
    const router = useRouter();
    return (
            <div className="px-4 text-5xl font-mono select-none">
              <Link href='/'>
                ranked
              </Link>

            </div>
            
    );
}