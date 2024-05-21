
import Navbar from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { HeroScrollDemo } from '../plan/Hero'
import Link from 'next/link'

import { Spotlight } from '@/components/ui/Spotlight'
import PricingCard from '../(main)/agency/[agencyId]/billing/_components/pricing-card'
import Pricingcomponent from '@/components/costcomponents/pricingcomponent'
import { FuturesCard } from '@/components/costcomponents/FuturesCard'

export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    <main className=" bg-stone-950">
      <Navbar />
      <section >
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40  left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Automate Your Work  <br />With Specto
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Specto transforms agency management with its comprehensive suite of tools,
              facilitating goal setting, progress tracking, and web design—all in one platform.
            </p>
            <Link href="/plan" className='w-full mt-11 flex justify-center'>
              <Button
                className="p-8 mb-8 md:mb-0 text-2xl w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-lg hover:shadow-neutral-500 duration-500"
              >
                <span className="text-xs sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                  Start For Free Today
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="	">
        <FuturesCard></FuturesCard>
      </section>
      <section className="">
        <Pricingcomponent></Pricingcomponent>
      </section>
    </main>
  )
}
