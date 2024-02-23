'use client'
import { useCallback, useState } from "react"
import { InputCustome } from "../InputCustome/InputCustome"
import { RepeatClockIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'
import ButtonStyle from "../ButtonStyle/ButtonStyle"
import { Api } from "../../utils/callApi"
import { useCharacterStore } from '../../store/useCharacterStore'
export function Form(){
    const [characterName, setCharacterName] = useState("")
    const {setCharacters} = useCharacterStore()
    const handleNameChange = useCallback((e)=>{
        setCharacterName(e.target.value)
    },[])

    const searchCharacters = useCallback(async()=>{
        Api.getCharacters(characterName)
        .then((res)=>{
            setCharacters(res)
        })
        .catch((error)=>{
            window.alert(error)
        })
    },[characterName])

    return(       
    <form className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow-0 flex flex-row flex-wrap justify-center">
            <div className="text-white block mt-4  lg:w-30 lg:inline-block lg:mt-0">
                <InputCustome 
                    value={characterName} 
                    onChange={handleNameChange} 
                    placeholder="Character Name"
                    leftElement={<Search2Icon />}
                    variant="flushed"
                />
            </div>
            <div className="lg:ms-10 flex flex-row">
                <div className="block mt-4 lg:inline-block lg:mt-0">
                    <ButtonStyle 
                        color="yellow" 
                        leftIcon={<SearchIcon/>}
                        label="Search"
                        variant="solid"
                        isDisabled={characterName === ""}
                        onClick={searchCharacters}  
                    />
                </div>
                <div className=" block mt-4 lg:inline-block lg:mt-0">
                    <ButtonStyle 
                        color="blackAlpha" 
                        rightIcon={<RepeatClockIcon/>}
                        label="Clear filters"
                        onClick={()=>{console.log("hi")}}
                    />
                </div>
            </div>
        </div>
    </form>
    )
} 