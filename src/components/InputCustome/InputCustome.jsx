
import React from 'react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'

/**
 *  Platform Input.
 * @param {string} value - value to form manager.
 * @param {string="text"} variant - change the style of the input for example: outline,filled,flushed,unstyled.
 * @callback onChange - action to execute when write in input.
 * @param {string} placeholder - input placeholder.
 * @param {JSX.Element} leftElement - If you want put an icon, or prefix, or something to the left of the icon you can add here .
 * @param {JSX.Element} rigthElement - If you want put an icon, or prefix, or something to the rigth of the icon you can add here .
 * @param {Object} props - If you want pass another prop for example type, isRequired .
 */

export const InputCustome = ({ value, variant="flushed", onChange, placeholder, leftElement=null, rigthElement=null, ...props }) => {
  return (
    <InputGroup>
        {
          leftElement && 
          <InputLeftElement>
            {leftElement}
          </InputLeftElement>
        }
        <Input 
          variant={variant}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
        {
          rigthElement && 
          <InputRightElement>
            {leftElement}
          </InputRightElement>
        }
    </InputGroup>
  )
}
