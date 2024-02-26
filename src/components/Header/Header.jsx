import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/starwars.svg'
import { HeaderForm } from '../HeaderForm/HeaderForm'
import Link from 'next/link'

export default function Header({form = true}) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href={"/"}><Image  className="cursor-pointer" src={Logo} alt="logo" width={130} height={"auto"} priority={true} /></Link>
            <h1 className="font-bold text-xl ml-6">Star Wars Wiki</h1>
        </div>
        {form && <HeaderForm/>}
    </nav>
  )
}
