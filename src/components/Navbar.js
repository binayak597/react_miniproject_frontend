import React from "react";
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Wrap,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/auth.actions";



export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { auth, role} = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box fontSize={"1.5rem"} fontWeight={"sm"}>
                <NavLink to={"/"}>Home</NavLink>
                </Box>
                    

                    <Flex pt={4} alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <NavLink to={"/login"}>{!auth && "Login"}</NavLink>
                            <NavLink to={"/signup"}>{!auth && "SignUp"}</NavLink>
                            <Button pb={4} display={auth ? "block" : "none"} onClick={() =>
                                dispatch(Logout())
                            }>Logout</Button>
                            <Wrap display={role === "admin" ? "Block" : "none"}>
                            <NavLink to={"/admin"}>Admin</NavLink>
                            </Wrap>
                            
                            <NavLink to={"/about"}>About</NavLink>
                            <Button pb={4} onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}