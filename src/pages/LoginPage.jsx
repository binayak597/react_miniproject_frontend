import React, { useState } from "react";
import { Box, Input, Button, Flex, Heading } from "@chakra-ui/react";
import { loginUser } from "../utils/handleApi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const { auth } = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if(auth){
        navigate("/");
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setLogin((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

     function handleClick() {
        loginUser(login, dispatch);
    }

    return (
        <Box m={"50px"}>
            <Heading>Login</Heading>
            <Flex gap={3} direction={"column"} m={"auto"} mt={"20px"} w={"40%"} h={"50%"} >
                {console.log(login)}

                <Input type="email" name="email" value={login.email} placeholder="Email" onChange={handleChange}></Input>

                <Input type="password" name="password" value={login.password} placeholder="Password" onChange={handleChange}></Input>

                <Button onClick={handleClick}>Login</Button>
            </Flex>
        </Box>
    );
}