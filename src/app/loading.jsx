import Loading from '../components/Loading/Loading'
import React from 'react'

export default function loading() {
  return (
    <section className="flex min-h-screen flex-col items-center bg-gray-900">
      <div className="flex flex-col items-center min-w-full ">
        <Loading/>
      </div>
    </section>
  )
}
