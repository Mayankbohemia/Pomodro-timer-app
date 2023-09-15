import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Text, Input } from "@chakra-ui/react";

function Signin() {
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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => alert('Please enter valid credentials'));
  };
  return (
    <Container marginTop="50px">
      <form onSubmit={submitHandler}>
        <Text fontSize="2rem" color="blue">
          Log In
        </Text>
        <Container
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
          flexDirection="column"
        >
          <Input
          border='solid blue 3px'
            w="400px"
            height="25px"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={emailHandler}
          />
          <Input
            border='solid blue 3px'
            w="400px"
            height="25px"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={passwordHandler}
          />
          <Button
            type="submit"
            size="md"
            height="30px"
            width="100px"
            border="2px"
            borderRadius="15px"
            backgroundColor="black"
            color="white"
            _hover={{ bg: "blue", borderRadius: "15px" }}
          >
            Sign In
          </Button>{" "}
        </Container>
      </form>
    </Container>
  );
}

export default Signin;
