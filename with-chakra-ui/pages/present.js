import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {
    Heading,
    Flex,
    Box,
    Button,
    Input,
    FormControl
} from "@chakra-ui/react";
import socketIOClient from "socket.io-client";
import {useState} from "react";

const ENDPOINT = "https://localhost:4000";


export default function Present() {
    const [response, setResponse] = useState("");
    const [accessCode, setAccessCode] = useState("");

    function joinRoom() {
        console.log(accessCode);
        const socket = socketIOClient(ENDPOINT, {reconnection: true, reconnectionAttempts: 3});
        socket.emit(accessCode, "Connected from Room 1");
        console.log(response);
    }

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box>
                <Heading>
                    Present
                </Heading>
                <Button mt={25} padding={5} onClick={() => {
                    joinRoom();
                }}>
                    Back
                </Button>
                <Button mt={25} padding={5} onClick={() => {
                    joinRoom();
                }}>
                    Next
                </Button>
            </Box>
        </Flex>
    )
}
