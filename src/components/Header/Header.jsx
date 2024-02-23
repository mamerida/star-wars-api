import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/starwars.svg'
import { Form } from '../Form/Form'

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Image src={Logo} alt="logo" width={130} height={"auto"} priority={true} />
            <h1 className="font-bold text-xl ml-6">Star Wars Wiki</h1>
        </div>
        <Form/>
    </nav>
  )
}
