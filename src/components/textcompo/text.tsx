"use client";

import Image from "next/image";
import React, { useState } from 'react'
import { CardBody, CardContainer, CardItem } from "../global/3d-card";
import Link from "next/link";
import { Trash } from "lucide-react";
import { Media } from '@prisma/client'
import { toast } from '../ui/use-toast'
import { Copy } from "lucide-react";
import { deleteMedia, saveActivityLogsNotification } from '@/lib/queries'
import { useRouter } from 'next/navigation'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'





type Props = { file: Media }



export function ThreeDCardDemo({ file }: Props) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return (
        <AlertDialog>      
         <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto
             h-96 rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {file.name}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {file.createdAt.toDateString()}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={file.link}
                        className="w-auto h-52 object-contain rounded-xl group-hover/card:shadow-xl"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(file.link)
                            toast({ title: 'Copied To Clipboard' })
                        }}
                        className="px-4 py-2 rounded-xl font-normal text-black dark:text-white"
                    >
                        <Copy size={15} />
                        Link

                    </button>
                    <AlertDialogTrigger asChild>
                        <button className="flex gap-2 text-red-600 p-2 bg-transparent hover:bg-red-100 text-center mt-2 rounded-md hove:bg-red-600 whitespace-nowrap">
                            <Trash className='h-4 mt-1 hover:animate-ping mr-1 w-4 text-red-500' />
                            Delete Image
                        </button>
                    </AlertDialogTrigger>
                </div>
            </CardBody>
        </CardContainer>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-left">
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-left">
                        Are you sure you want to delete this file? All subaccount using this
                        file will no longer have access to it!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex items-center">
                    <AlertDialogCancel className="mb-2">Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        disabled={loading}
                        className="flex gap-2 text-red-600 bg-transparent hover:bg-red-100 text-center rounded-md hove:bg-red-600 whitespace-nowrap bg-destructive hover:bg-destructive"
                        onClick={async () => {
                            setLoading(true)
                            const response = await deleteMedia(file.id)
                            await saveActivityLogsNotification({
                                agencyId: undefined,
                                description: `Deleted a media file | ${response?.name}`,
                                subaccountId: response.subAccountId,
                            })
                            toast({
                                title: 'Deleted File',
                                description: 'Successfully deleted the file',
                            })
                            setLoading(false)
                            router.refresh()
                        }}
                    >
                        <Trash className='h-4 hover:animate-ping w-4 text-red-500' />
                        Delete Image
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}
