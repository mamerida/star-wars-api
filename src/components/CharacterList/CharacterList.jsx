'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useCharacterStore } from '@/store/useCharacterStore'
import CharacterCard from '../CharacterCard/CharacterCard'
import SelectCustome from '../SelectCustome/SelectCustome'
import ButtonStyle from '../ButtonStyle/ButtonStyle'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Api } from '@/utils/callApi'
import Loading from '../Loading/Loading'

const SELECT_GENDER = [
    {value:"male", label:"Male"},
    {value:"female",label:"Female"},
    {value:"unknown",label:"Unknown"},
    {value:"n/a", label: "N/A"}
]

export default function CharacterList() {
    const [characterSeleted, setCharacterSeleted] = useState([])
    const [genderSelected, setGenderSelected] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {characters, previous, next, setCharacters} = useCharacterStore()

    const filterCharacters = (characters,gender) =>{
        return  characters.filter((chr)=> chr.gender === gender)
    }

    const handleGender = useCallback((e)=>{
        setCharacterSeleted(e.target.value ? filterCharacters(characters,e.target.value) : characters)
        setGenderSelected(e.target.value)
    },[characters])

    const handlePagination = useCallback( (url)=>{
        setIsLoading(true);
        Api.getPage(url).then((characters)=>{
            setCharacters(characters)
        }).catch((error)=>{
            window.alert(error)
        }).finally(()=>{
            setIsLoading(false)
        })
    },[characters])

    useEffect(()=>{
        setCharacterSeleted(genderSelected? filterCharacters(characters,genderSelected) : characters)
    },[characters])

    return (
        <>
            <section className='mt-10 px-10 lg:px-35 min-w-full flex flex-row justify-between text-white items-end '>
                <div>
                    <SelectCustome
                        placeholder={"Select a gender"} 
                        variant="flushed"
                        options={SELECT_GENDER}
                        onChange={handleGender}
                    />
                </div>
                <div>
                    <ButtonStyle
                        isDisabled={!previous}
                        leftIcon={<ArrowBackIcon/>}
                        className='me-5'
                        onClick={()=>{handlePagination(previous)}}
                    />
                    <ButtonStyle
                        isDisabled={!next}
                        rightIcon={<ArrowForwardIcon/>}
                        onClick={()=>{handlePagination(next)}}
                    />
                </div>
            </section>
            {isLoading ?
                    <Loading/>
                :
                    <section className='flex flex-wrap justify-center'>
                        {characterSeleted.map((chr)=>{
                            return (
                                <div  key={chr.url}  className='p-4 max-w-sm'>
                                    <CharacterCard 
                                        url={chr.url} 
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
            }
        </>
    )
}
