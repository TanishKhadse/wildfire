'use client';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation"


export default function Logo() {
    const router = useRouter();
    return (
            <div className="px-4 text-5xl font-[Consolas] select-none">
              <Link href='/'>
                ranked
              </Link>

            </div>
            
    );
}