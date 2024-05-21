import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { UserButton, currentUser } from '@clerk/nextjs'
import { DM_Sans,Righteous } from 'next/font/google'

const Righteousfont = Righteous({
  weight: '400',
  subsets:['latin-ext'],
  style: ['normal'],


})

type Props = {}

const Navbar = async (props: Props) => {
  const user = await currentUser()
  return (
    <div className="fixed right-0 left-0 top-0 py-4 px-4  backdrop-blur-lg z-[100] flex items-center border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className={`${Righteousfont.className} text-3xl ml-7 text-white`}>Specto</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/agency"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? 'Dashboard' : 'Get Started'}
          </span>
        </Link>
        {user ? <UserButton afterSignOutUrl="/" /> : null}
        <MenuIcon className="md:hidden" />
      </aside>
    </div>
  )
}

export default Navbar