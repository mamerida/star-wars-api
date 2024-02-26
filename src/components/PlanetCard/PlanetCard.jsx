import React from 'react'
import { Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react'

export default function PlanetCard({name, population, climate, diameter, gravity}) {
  return (
    <Card maxW='sm' className=' h-[200px] w-[360px]'>
        <CardBody>
            <Stack mt='2' spacing='3'  className='transition duration-300 ease-in-out hover:scale-110'>
                <Heading size='lg'>{name}</Heading>
            </Stack>
            <Stack mt='6' spacing='3' direction='row' className='flex justify-between'>
                <Text className='capitalize' ><strong>population: </strong>{population}</Text>
                <Text className='capitalize' ><strong>limate: </strong>{climate}</Text>
            </Stack>
            <Stack mt='6' spacing='3' direction='row' className='flex justify-between'>
                <Text className='capitalize' ><strong>diameter: </strong>{diameter}</Text>
                <Text className='capitalize' ><strong>gravity: </strong>{gravity}</Text>
            </Stack>
        </CardBody>
    </Card>
  )
}
