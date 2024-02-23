'use client'

import React from 'react'
import { useCharacterStore } from '@/store/useCharacterStore'
import CharacterCard from '../CharacterCard/CharacterCard'

export default function CharacterList() {

    const characters = useCharacterStore((state) => state.characters)

    return (
        <section className='flex flex-wrap justify-center mt-10'>
            {characters.map((chr)=>{
                return (
                    <div className='p-4 max-w-sm'>
                        <CharacterCard 
                            url={chr.url} 
                            key={chr.name} 
                            name={chr.name}
                            mass={chr.mass}
                            eye_color={chr.eye_color}
                            skin_color={chr.skin_color} 
                            gender={chr.gender}
                        />
                    </div>
                )
            })}
        </section>
    )
}
