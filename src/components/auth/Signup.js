import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Text, Input } from "@chakra-ui/react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
   createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <form onSubmit={submitHandler}>
        <Text fontSize="2rem" color="red" >Sign Up, if you are new here</Text>

        <Container  display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="1rem">
          
        <Input
         border='solid red 3px'
         w="400px"
         height="25px"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={emailHandler}
        />
        <Input
         border='solid red 3px'
         w="400px"
         height="25px"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={passwordHandler}
        />
        <Button  type="submit"
            size="md"
            height="30px"
            width="100px"
            border="2px"
            borderRadius="15px"
            backgroundColor="black"
            color="white"
            _hover={{ bg: "red", borderRadius: "15px" }} >
          Sign Up
          </Button>
          </Container>
      </form>
    </Container>
  );
}

export default Signup;
