import React from 'react'
import { Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react'

export default function FilmsCards({episode_id, title, release_date, director, producer}) {
  return (
    <Card maxW='sm' className=' h-[250px] w-[360px]'>
        <CardBody>
            <Stack mt='2' spacing='3'  className='transition duration-300 ease-in-out hover:scale-110'>
                <Heading size='lg'>Episode {episode_id} : {title}</Heading>
            </Stack>
            <Stack mt='6' spacing='3' direction='row' className='flex justify-between'>
                <Text className='capitalize' ><strong>director: </strong>{director}</Text>
            </Stack>
            <Stack mt='6' spacing='3' direction='row' className='flex justify-between'>
                <Text className='capitalize' ><strong>producers: </strong>{producer}</Text>
                <Text className='capitalize' ><strong>release_date: </strong>{release_date}</Text>
            </Stack>
        </CardBody>
    </Card>
  )
}
