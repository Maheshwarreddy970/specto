import React from 'react'
import { pricingCards } from '@/lib/constants'
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { LampComponent } from '@/components/global/lamp'
import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

export default function Pricingcomponent() {
  return (
    <>
    <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          {
            pricingCards.map((features, index) => (
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
                      {features.features.map((points, index) => (
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

        </div></>
  )
}
