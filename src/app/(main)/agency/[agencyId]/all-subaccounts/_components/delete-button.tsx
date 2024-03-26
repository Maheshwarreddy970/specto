'use client'
import {
  deleteSubAccount,
  getSubaccountDetails,
  saveActivityLogsNotification,
} from '@/lib/queries'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Trash } from 'lucide-react'

type Props = {
  subaccountId: string
}

const DeleteButton = ({ subaccountId }: Props) => {
  const router = useRouter()

  return (
    <div
      className="flex text-red-600 p-2 bg-transparent hover:bg-red-100 text-center rounded-md hove:bg-red-600 whitespace-nowrap-"
      onClick={async () => {
        const response = await getSubaccountDetails(subaccountId)
        await saveActivityLogsNotification({
          agencyId: undefined,
          description: `Deleted a subaccount | ${response?.name}`,
          subaccountId,
        })
        await deleteSubAccount(subaccountId)
        router.refresh()
      }}
    >  
   <Trash className='h-4 hover:animate-ping mr-1 w-4 text-red-500' />

      Delete Sub Account
    </div>
  )
}

export default DeleteButton
