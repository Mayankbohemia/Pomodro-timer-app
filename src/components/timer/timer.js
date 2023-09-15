import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import BreakTimer from "./breakTimer";

function Timer() {
  const [timerValue, setTimerValue] = useState(1500);
  const [timeHandler, setTimeHandler] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [manageBreakTimer, setManageBreakTimer] = useState(false)

  const startHandler = () => {
   
    setTimeHandler(true);
    setShowButtons(true);
  };
  const pauseHandler = () => {
    setTimeHandler(false);
  };
  const resetHandler = () => {
    setTimerValue(1500);
    setTimeHandler(false);
    setShowButtons(false);
    setManageBreakTimer(false)
  };

  const minutes = Math.trunc(timerValue / 60);
  const seconds = timerValue % 60;
  useEffect(() => {
    let time;
    if (timeHandler) {
      time = setInterval(() => {
        setTimerValue((prev) => prev - 1);
      },1000);
    }

    if (minutes === 0 && seconds === 0) {
        setTimeHandler(false);
        clearInterval(time)
        setManageBreakTimer(true)
      }
      

    return () => clearInterval(time);
  }, [timeHandler,minutes,seconds,manageBreakTimer]);

  const breakTimerHandler = () => {
    setTimerValue(300)
   

  }
  

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      marginBottom='15px'
    >
      <Heading>Pomodro Timer App</Heading>

      <Container
        mb="15px"
        backgroundColor="black"
        padding="15px"
        borderRadius="30px"
      >
        <ButtonGroup display="flex" gap="4rem">
          <Button
            onClick={startHandler}
            size="md"
            height="15px"
            width="100px"
            border="2px"
            backgroundColor="black"
            color="white"
            _hover={{ bg: "red", borderRadius: "15px" }}
          >
            Start
          </Button>
          {showButtons && (
            <Button
              onClick={pauseHandler}
              size="md"
              height="15px"
              width="100px"
              border="2px"
              backgroundColor="black"
              color="white"
              _hover={{ bg: "red", borderRadius: "15px" }}
            >
              Pause
            </Button>
          )}
          {showButtons && (
            <Button
              onClick={resetHandler}
              size="md"
              height="15px"
              width="100px"
              border="2px"
              backgroundColor="black"
              color="white"
              _hover={{ bg: "red", borderRadius: "15px" }}
            >
              Reset
            </Button>
          )}
        </ButtonGroup>
      </Container>

      <Container
        borderRadius="50%"
        bg="black"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          border="solid red 15px "
          height='300px'
          width='300px'
          borderRadius="50%"
         
          margin="12px"
         
        >
          <Text color="white" fontSize="4rem">
            {minutes.toString().padStart(2, 0)}:
            {seconds.toString().padStart(2, 0)}
          </Text>
         {manageBreakTimer &&  <BreakTimer onClick={breakTimerHandler} />}
        </Container>
      </Container>
    </Container>
  );
}

export default Timer;
