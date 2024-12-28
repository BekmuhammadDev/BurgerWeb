import React from 'react';
import { Card, CardBody, Stack, Heading, Text, CardFooter } from '@chakra-ui/react';
import CardBurger from "../../../assets/img/cardburger.png"
import Image from 'next/image';
import { IoIosStarOutline } from "react-icons/io";
import { SlPlus } from "react-icons/sl";




const index = () => {
    return (
        <Card w={265} h={289} rounded={26} className=' hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out ' >
            <CardBody>
                <Image src={CardBurger} alt='#' className='absolute -top-12 left-10' /> <br />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' fontSize={19}>Чикен бургер</Heading>
                    <Text fontSize={16} color='black' fontWeight={500}>
                        200 гр. котлеты + сырный салат + лук + томаты
                    </Text>

                    <IoIosStarOutline size={30} />


                </Stack>
            </CardBody>
            <CardFooter justify='space-between' pb={10}>
                <Text fontSize={24} color='green'>$ 22.53</Text>
                <SlPlus size={36} color='green'/>
            </CardFooter>
        </Card>
    );
};

export default index;