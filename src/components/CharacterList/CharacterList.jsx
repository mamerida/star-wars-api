'use client'

import React from 'react'
import { useCharacterStore } from '@/store/useCharacterStore'

export default function CharacterList() {

    const characters = useCharacterStore((state) => state.characters)
    console.log(characters)

    return (
        <>
            {characters.map((el)=>{
                return <div className="text-white block mt-4  lg:w-30 lg:inline-block lg:mt-0">{el.name}</div>
            })}
        </>
    )
}
