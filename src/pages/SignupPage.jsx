import React, { useState } from "react";
import { Box, Flex, Input, Button, Select, Heading } from "@chakra-ui/react";
import { registerUser } from "../utils/handleApi";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        dob: "",
        location: "",
        password: ""
    });

    const [role, setRole] = useState("");
    const [cPassword, setCPassword] = useState("");

    // const { auth, token, role: userRole, userId, userName } = useSelector((state) => state);
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setNewUser((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    function handleRole(event) {
        const { value } = event.target;
        setRole({ role: value });

    }

    function handlePassword(event) {
        const { value } = event.target;
        setCPassword(value);
    }

    function handleClick() {
        const { password } = newUser;
        if (password === cPassword) {
            const user = { ...newUser, ...role };
            // registerUser(user, setNewUser, setRole, setCPassword);
            registerUser(user);
            navigate("/login");

        } else {
            alert("password is not matched");
        }

    }

    return (
        <Box m={"50px"} >
            <Heading>Register</Heading>
            <Flex gap={3} direction={"column"} m={"auto"} mt={"20px"} w={"40%"} h={"50%"}>
                {console.log(newUser)}
                <Input type="text" name="name" value={newUser.name} placeholder="Enter Your Name" onChange={handleChange}></Input>
                <Input type="email" name="email" value={newUser.email} placeholder="Email" onChange={handleChange}></Input>
                <Input type="date" name="dob" value={newUser.dob} onChange={handleChange}></Input>
                <Select onChange={handleRole}>
                    {console.log(role)};
                    <option value={""}>Select Role</option>
                    <option value={"admin"}>Admin</option>
                    <option value={"user"}>User</option>
                </Select>
                <Input type="text" name="location" value={newUser.location} placeholder="Location" onChange={handleChange}></Input>
                <Input type="password" name="password" value={newUser.password} placeholder="Password" onChange={handleChange}></Input>
                <Input type="password" name="password" value={cPassword} placeholder="Confirm Password" onChange={handlePassword}></Input>
                <Button onClick={handleClick}>SignUp</Button>
            </Flex>

        </Box>
    );
}