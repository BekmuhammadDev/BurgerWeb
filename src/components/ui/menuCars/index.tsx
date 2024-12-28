import React from 'react';
import { Card, CardBody, Stack, Heading, Text, CardFooter,IconButton, Box } from '@chakra-ui/react';
import CardBurger from "../../../assets/img/cardburger.png"
import Image from 'next/image';
import { IoIosStarOutline } from "react-icons/io";
import { SlPlus } from "react-icons/sl";




const index = () => {
    return (
        <Card w={232} h={253} rounded={26} className=' hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out ' >
            <CardBody>
                <Image src={CardBurger} width={147} height={118} alt='#' className='absolute -top-12 left-10' /> <br />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' fontSize={16}>Чикен бургер</Heading>
                    <Text fontSize={14} color='black' fontWeight={500}>
                        200 гр. котлеты + сырный салат + лук + томаты
                    </Text>
                    <Box>
                    <IoIosStarOutline size={25} />
                    </Box>
                </Stack>
            </CardBody>
            <CardFooter justify='space-between' paddingTop={0}>
                <Text fontSize={20} color='green'>$ 22.53</Text>
                <SlPlus size={30} color='green'/>
            </CardFooter>
        </Card>
    );
};

export default index;