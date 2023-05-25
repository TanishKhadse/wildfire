'use client';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Logo() {
    const router = useRouter();
    return (
            <div className="px-4">
              <Image
                src="/rankedlogo.png"
                width="125"
                height="150"
                alt="logo"
                className="cursor-pointer"
                onClick={()=>router.push('/')}  
              />
            </div>
            
    );
}