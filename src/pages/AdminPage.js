import { Box, Button, Heading, Input, Flex, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deleteUser, updateUser } from "../utils/handleApi";
import { useNavigate } from "react-router-dom";

export default function Admin(){
    const { role, userId, userName } = useSelector((state) => state);
    const[key, setKey] = useState("Select");
    const[changeData, setChangeData] = useState("");
    const navigate = useNavigate();

    function handleKey(event){
        const {value} = event.target;
        setKey(value);
    }

    function handleChangeData(event){
        const {value} = event.target;
        setChangeData(value);
    }

    function handleUpdate(){
        const obj = {
            [key]: changeData
        }
        updateUser(userId, role, obj);
        navigate("/");
    }

   function handleDelete(){
    deleteUser(userId, role);
    navigate("/signup");

    }

    return (
        <Box mt={'50px'}>
        <Heading>Update</Heading>
            <Flex gap={3} direction={"column"} m={"auto"} mt={"20px"} w={"40%"} h={"50%"}>
                <Input type="text" name="id" defaultValue={userName}></Input>
                <Select onChange={handleKey}>
                    <option value="">Select an option</option>
                    <option value="name">Username</option>
                    <option value="email">Email</option>
                    <option value="dob">DOB</option>
                    <option value="role">Role</option>
                    <option value="location">Location</option>
                    <option value="password">Password</option>
                </Select>
                <Input type="text" name="inputName" value={changeData} placeholder={key} onChange={handleChangeData}></Input>
                    <Button onClick={handleUpdate}>Update</Button>
                    <Button onClick={handleDelete}>Delete</Button>
            </Flex>
        </Box>
    );
}