import React from "react";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button, Text } from "@chakra-ui/react";

function AuthDetails(props) {
  const [authUser, setAuthUser] = useState("");

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        props.onLoginFalse();
      } else {
        setAuthUser(null);
        props.onLoginTrue();
      }
    });

    return () => listen();
  }, [props]);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfull");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <>
        {authUser ? (
          <p>
            Signed In as: <Text color='blue'>{authUser.email}</Text> 
            <Button
              size="md"
              height="30px"
              width="100px"
              border="2px"
              borderRadius='15px'
              backgroundColor="black"
              color="white"
              _hover={{ bg: "red", borderRadius: "15px" }}
              onClick={signOutHandler}
            >
              Sign Out
            </Button>{" "}
          </p>
        ) : (
          <p> Signed Out</p>
        )}
      </>
    </div>
  );
}

export default AuthDetails;
