'use client'
import { useCallback, useState } from "react"
import { InputCustome } from "../InputCustome/InputCustome"
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import ButtonStyle from "../ButtonStyle/ButtonStyle"
import { Api } from "../../utils/callApi"
import { API_ENDPOINT } from "../../utils/contanst"
import { useSwapiStore } from '../../store/useSwapiStore'
import { Spinner } from '@chakra-ui/react'
import SelectCustome from "../SelectCustome/SelectCustome"
import { useRouter } from 'next/navigation'



export function HeaderForm(){
    const [characterName, setCharacterName] = useState("")
    const [endPointSelected, setEndPointSelected] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {setResults} = useSwapiStore()
    const router = useRouter()
    const handleNameChange = useCallback((e)=>{
        setCharacterName(e.target.value)
    },[])

    const handleSelectChange = useCallback((e)=>{
        setEndPointSelected(e.target.value)
    },[])

    const searchElements = useCallback(()=>{
        setIsLoading(true)
        Api.getElement(characterName, endPointSelected)
        .then((res)=>{
            setResults({...res,type:endPointSelected})
        })
        .then(()=>{
            router.push(`/${endPointSelected}`)
        })
        .catch((error)=>{
            window.alert(error)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    },[characterName, endPointSelected, router, setResults])

    return(       
    <form className=" block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm flex flex-row flex-wrap justify-center md:justify-start">
            <div className="text-white block mt-4 max-[550px]:w-full md:w-30 lg:inline-block lg:mt-0">
                <InputCustome 
                    value={characterName} 
                    onChange={handleNameChange} 
                    placeholder={`${endPointSelected || "Element"} name `}
                    leftElement={<Search2Icon />}
                    onKeyDown={(e)=>{if(e.keyCode === 13)e.preventDefault()}}
                    variant="flushed"
                />
            </div>
            <div className="lg:ms-10 flex flex-row max-[550px]:w-full justify-center md:justify-start">
                <div className="block text-white mt-4 ms-5 lg:inline-block lg:mt-0">
                    <SelectCustome
                        placeholder={"Endpoint"} 
                        variant="flushed"
                        value={characterName} 
                        options={API_ENDPOINT}
                        onChange={handleSelectChange}
                    />
                </div>
                <div className="block mt-4 ms-5 lg:inline-block lg:mt-0">
                    <ButtonStyle 
                        color="yellow" 
                        leftIcon={<SearchIcon/>}
                        label="Search"
                        variant="solid"
                        isDisabled={characterName === "" || isLoading || endPointSelected === ""}
                        onClick={searchElements}  
                    />
                </div>
                {isLoading && <Spinner color="white" className="mt-4" />}
            </div>
        </div>
    </form>
    )
} 