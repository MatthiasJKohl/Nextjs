import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='bg-white'>
      <div className='text-center text-2xl font-bold'><h1>Home Page</h1></div>
      <div className='text-center text-xl font-semibold py-5'><Link href='/clients'>
        All Clients
      </Link></div>
    </div>
    <div className='text-center text-xl font-semibold py-5'><Link href='/createClient'>
        Create Client
      </Link></div>
    <div className='text-center text-xl font-semibold py-5'><Link href='/foodParcels'>
        Food Parcels
      </Link></div>
    </>
  )
}
