import React from 'react';
import { Box, Heading, Image } from "@chakra-ui/react";

export default function HomePage(){

    return (
        <Box mt={"50px"}>
            <Heading size={"4xl"}>Welcome</Heading>
            <Image margin={"auto"} mt={"60px"} width={"80%"} src="https://img.freepik.com/premium-photo/
            mesmerizing-view-green-landscape-with-trees-beautiful-cloudy-sky_181624-57064.jpg"></Image>
        </Box>
    );
}