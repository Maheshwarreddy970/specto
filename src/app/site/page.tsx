import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import { LampComponent } from '@/components/global/lamp'
import Navbar from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { CheckIcon } from 'lucide-react'
import { HeroScrollDemo } from '../plan/Hero'
import Link from 'next/link'
import { pricingCards } from '@/lib/constants'
import { features } from 'process';

export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    <main className="">
      <Navbar />
      <section className="w-full sm:-mb-96 bg-stone-950	 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 bg-stone-950	"></div>
        <div className="flex flex-col md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Link href="/plan">
                  <Button
                    className="p-8 mb-8 md:mb-0 text-2xl w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                  >
                    <span className="text-xs sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                      Start For Free Today
                    </span>
                  </Button>
                </Link>

                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Specto
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <section className=" bg-stone-950	">
        <HeroScrollDemo></HeroScrollDemo>
      </section>
      <section className="mt-[-500px] bg-stone-950		">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          {
            pricingCards.map((features,index) => (
              <CardContainer key={index} className="inter-var ">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white "
                  >
                    {features.title}
                    <h2 className="text-6xl ">{features.price}</h2>
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {features.description}
                    <ul className="my-4 flex flex-col gap-2">
                      {features.features.map((points,index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckIcon />{points}
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
                    <Link href="/plan">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Get Started Now
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            ))
          }

        </div>
      </section>
    </main>
  )
}
