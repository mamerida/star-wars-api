'use client'
import { useCallback, useState } from "react"
import { InputCustome } from "../InputCustome/InputCustome"
import { Search2Icon } from '@chakra-ui/icons'
export function Form(){
    const [characterName, setCharacterName] = useState("")
    const handleNameChange = useCallback((e)=>{
        setCharacterName(e.target.value)
    },[])

    return(       
    <form className="block flex-grow lg:flex lg:items-center">
        <div className="text-sm lg:flex-grow">
            <div className="text-white lg:w-6/12 md:w-8/12 w-full">
                <InputCustome 
                    value={characterName} 
                    onChange={handleNameChange} 
                    placeholder="Character Name"
                    leftElement={<Search2Icon />}
                    variant="flushed"
                />
            </div>
        </div>
    </form>
    )
} 