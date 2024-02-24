'use client'

import React, { useCallback, useState } from 'react'
import { useCharacterStore } from '@/store/useCharacterStore'
import CharacterCard from '../CharacterCard/CharacterCard'
import SelectCustome from '../SelectCustome/SelectCustome'

const SELECT_GENDER = [
    {value:"male", label:"Male"},
    {value:"female",label:"Female"},
    {value:"unknown",label:"Unknown"},
    {value:"n/a", label: "N/A"}
]

export default function CharacterList() {
    const characters = useCharacterStore((state) => state.characters)
    const [genderSelected, setGenderSelected] = useState("")
    const handleGender = useCallback((e)=>{
        setGenderSelected(e.target.value)
    },[])

    return (
        <>
            <section className='m-0 text-white'>
                <SelectCustome
                    placeholder={"Select a gender"} 
                    variant="flushed"
                    options={SELECT_GENDER}
                    onChange={handleGender}
                />
            </section>
            <section className='flex flex-wrap justify-center'>
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
        </>
    )
}
