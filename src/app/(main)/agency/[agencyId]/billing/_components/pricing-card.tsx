'use client'
import SubscriptionFormWrapper from '@/components/forms/subscription-form/subscription-form-wrapper'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckIcon } from 'lucide-react'
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'

import { PricesList } from '@/lib/types'
import { useModal } from '@/providers/modal-provider'
import { useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {
  features: string[]
  buttonCta: string
  title: string
  description: string
  amt: string
  duration: string
  highlightTitle: string
  highlightDescription: string
  customerId: string
  prices: PricesList['data']
  planExists: boolean
}

const PricingCard = ({
  amt,
  buttonCta,
  customerId,
  description,
  duration,
  features,
  highlightDescription,
  highlightTitle,
  planExists,
  prices,
  title,
}: Props) => {
  const { setOpen } = useModal()
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  const handleManagePlan = async () => {
    setOpen(
      <CustomModal
        title={'Manage Your Plan'}

        subheading="You can change your plan at any time from the billings settings"
      >
        <SubscriptionFormWrapper
          customerId={customerId}
          planExists={planExists}
        />
      </CustomModal>,
      async () => ({
        plans: {
          defaultPriceId: plan ? plan : '',
          plans: prices,
        },
      })
    )
  }
  return (
    <div>

      
      <CardContainer className="inter-var ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white "
          >
            {title}
            <h2 className="text-6xl ">{amt}</h2>
          </CardItem>
          <CardItem
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
            <ul className="my-4 flex flex-col gap-2">
            <li  className="flex items-center gap-2">
            {duration}
  
                </li>
              {features.map((feature,index) => (
                <li  key={index} className="flex items-center gap-2">
                  <CheckIcon />{feature}
                </li>
              ))}
            </ul>
          </CardItem>
          <div className="flex justify-between items-center mt-8">
              <CardItem
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                                  {highlightDescription}

              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                onClick={handleManagePlan}
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
{buttonCta}              </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}

export default PricingCard
