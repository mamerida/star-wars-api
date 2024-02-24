import React from 'react'
import { Select } from '@chakra-ui/react'

export default function SelectCustome({options=[], placeholder, variant, onChange}) {

  return (
    <>
        <Select 
            placeholder={placeholder}
            variant={variant}
            onChange={onChange}
        >
            {options.map(opt=>(<option key={opt.value} value={opt.value}>{opt.label}</option>))}
        </Select>
    </>
  )
}
