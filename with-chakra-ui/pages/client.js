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


export default function Client() {
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
                    Join Room
                </Heading>
                        <Input mt={5} placeholder="Access Code" value={accessCode} onChange={(e) => setAccessCode(e.target.value)}/>
                    <Button mt={5} onClick={() => {
                        joinRoom();
                    }}>
                        Join
                    </Button>
            </Box>
        </Flex>
    )
}
