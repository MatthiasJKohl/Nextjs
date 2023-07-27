import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import FoodParcelTable from '../../components/FoodParcelTable'


export default function foodParcels({data}) {

  return (
    <>
    <Head>
        <title>Food Parcels</title>
    </Head>
    <FoodParcelTable data={data} />
    </>
  )
}


export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.NEXT_API_URL1}/clients`)
  console.log(response)
  const data = await response.json()
  console.log(process.env.NEXT_API_URL1, data)
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
        data: data ? data : [],
      },
    };
  }