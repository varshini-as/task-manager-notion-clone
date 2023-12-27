import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Heading from './_components/heading'
import Heroes from './_components/heroes'
import Footer from './_components/footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-full dark:bg-[#1F1F1F]'>
      <div className='flex flex-col items-center justify-center flex-1 lg:justify-start text-center px-6 pt-3 pb-10 gap-y-8'>
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  )
}
