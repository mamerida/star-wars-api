'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useSwapiStore } from '@/store/useSwapiStore'
import CharacterCard from '../CharacterCard/CharacterCard'
import SelectCustome from '../SelectCustome/SelectCustome'
import ButtonStyle from '../ButtonStyle/ButtonStyle'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Api } from '@/utils/callApi'
import Loading from '../Loading/Loading'
import { notFound } from 'next/navigation'

export default function List({optionSelected}) {
    const [isLoading, setIsLoading] = useState(false);
    const {results, type, previous, next, setResults} = useSwapiStore()

    const handlePagination = useCallback( (url)=>{
        setIsLoading(true);
        Api.getPage(url).then((result)=>{
            setResults({...result, type: optionSelected})
        }).catch((error)=>{
            window.alert(error)
        }).finally(()=>{
            setIsLoading(false)
        })
    },[results, optionSelected])

    if(type !== optionSelected){
        return notFound()
    }

    return (
        <>
            <section className='mt-10 px-10 lg:px-35 min-w-full flex flex-row justify-between text-white items-end '>
                <div/>
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
                        {results.map((chr)=>{
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
