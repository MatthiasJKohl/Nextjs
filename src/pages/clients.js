import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function clients({data}) {
  return (
    <>
    <Head>
    <title>Clients List</title>
    <meta name='description' content='Clients List' />
    </Head>
    <div className='text-left text-2xl font-bold p-3 border-2 inline-block min-w-min' > <Link href='/'>Home</Link> </div>
    <div className='flex flex-col gap-2 p-4'>
        {data.map(client => (
            <div className='p-2 border'>
                <h1 className='text-xl font-semibold'>{client.name}</h1>
                <p className='text-base text-gray-500'>{client.gender}</p>
                <p className='text-base text-gray-500'>{client.age}</p>
            </div>
        ) ) }
    </div>
    </>
  )
}



export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.NEXT_API_URL1}/clients`)
    const data = await response.json()
    if (!Array.isArray(data)) {
        // Handle the case where data is not an array
        return {
          props: {
            data: [],
          },
        };
      }
      return {
        props: {
          data,
        },
      };
    }
