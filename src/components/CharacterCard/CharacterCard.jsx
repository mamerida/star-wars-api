import { Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image';

const getCharactersNumber = (url) => {
    const dataArray = url.split('/');
    const name =  dataArray[dataArray.length - 2];
    return require(`../../../public/static/assets/img/people/${name}.jpg`)
};

export default function CharacterCard({name, gender, mass, eye_color, skin_color, url}) {
    
  return (
    <Card maxW='sm' >
        <CardBody>
            <Stack mt='2' spacing='3'  className='transition duration-300 ease-in-out hover:scale-110'>
                <Image
                    className='rounded-lg shadow-lg shadow-yellow-500/50'
                    src={getCharactersNumber(url)}
                    alt="error"
                    priority={false}
                />
                <Heading size='lg'>{name}</Heading>
            </Stack>
            <Stack mt='6' spacing='3' direction='row' className='flex justify-between'>
                <Text className='capitalize' ><strong>Gender: </strong>{gender}</Text>
                <Text className='capitalize' ><strong>Mass: </strong>{mass}</Text>
            </Stack>
            <Stack mt='6' spacing='3' direction='row' className='flex justify-between'>
                <Text className='capitalize' ><strong>Eyes Color: </strong>{eye_color}</Text>
                <Text className='capitalize' ><strong>Skin Color: </strong>{skin_color}</Text>
            </Stack>
        </CardBody>
    </Card>
  )
}
