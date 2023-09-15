import React from "react";
import { Button } from "@chakra-ui/react";

function BreakTimer(props) {
  return <div><Button  
  fontSize='1.5rem'
 onClick={props.onClick}
  border="2px"
  backgroundColor="black"
  color="white"
  _hover={{ bg: "red", borderRadius: "10px" }}>Take a Break</Button></div>;
}

export default BreakTimer;
