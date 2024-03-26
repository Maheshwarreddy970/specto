'use client'
import { useModal } from '@/providers/modal-provider'
import React from 'react'
import { Button } from '../ui/button'
import CustomModal from '../global/custom-modal'
import UploadMediaForm from '../forms/upload-media'

type Props = {
  subaccountId: string
}

const MediaUploadButton = ({ subaccountId }: Props) => {
  const { isOpen, setOpen, setClose } = useModal()

  return (
    <Button
      className='p-[3px] relative'
      onClick={() => {
        setOpen(
          <CustomModal
            title="Upload Media"
            subheading="Upload a file to your media bucket"
          >
            <UploadMediaForm subaccountId={subaccountId}></UploadMediaForm>
          </CustomModal>
        )
      }}
    >
         <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Upload Media
              </div>
    </Button>
  )
}

export default MediaUploadButton
