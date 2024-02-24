import React from 'react'
import CardLoading from './CardLoading'


export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center w-full h-full mt-10 gap-10">
        <CardLoading/>
        <CardLoading/>
        <CardLoading/>
        <CardLoading/>
        <CardLoading/>
        <CardLoading/>
    </div>
  )
}



