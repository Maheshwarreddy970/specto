'use client'
import React from 'react'
import { z } from 'zod'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { createMedia, saveActivityLogsNotification } from '@/lib/queries'
import { Input } from '../ui/input'
import FileUpload from '../global/file-upload'
import { Button } from '../ui/button'

type Props = {
  subaccountId: string
}

const formSchema = z.object({
  link: z.string().min(1, { message: 'Media File is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
})

const UploadMediaForm = ({ subaccountId }: Props) => {
  const { toast } = useToast()
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    defaultValues: {
      link: '',
      name: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await createMedia(subaccountId, values)
      await saveActivityLogsNotification({
        agencyId: undefined,
        description: `Uploaded a media file | ${response.name}`,
        subaccountId,
      })

      toast({ title: 'Succes', description: 'Uploaded media' })
      router.refresh();
      window.location.reload()
      
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Failed',
        description: 'Could not uploaded media',
      })
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className='text-black'>Media Information</CardTitle>
        <CardDescription className='text-black'>
          Please enter the details for your file
        </CardDescription >
      </CardHeader>
      <CardContent >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className='text-black'>File Name</FormLabel>
                  <FormControl className='text-black'>
                    <Input
                      placeholder="Your agency name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Media File</FormLabel>
                  <FormControl>
                    <FileUpload
                      apiEndpoint="subaccountLogo"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="p-[3px] relative" type="submit"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Upload Media
              </div>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default UploadMediaForm
