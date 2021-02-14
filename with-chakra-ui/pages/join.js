import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {
    Heading,
    Flex,
    Box,
    Button
} from "@chakra-ui/react";
import socketIOClient from "socket.io-client";
import {useState} from "react";

const ENDPOINT = "https://localhost:4000";


export default function Join() {
    const [response, setResponse] = useState("");

    function createRoom() {
        console.log("button");
        const socket = socketIOClient(ENDPOINT, {reconnection: false, reconnectionAttempts: 3});
        socket.emit('createRoom');
        console.log(response);
    }

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box>
                <Heading>
                    Create Room
                </Heading>
                <Button mt={5} onClick={() => {
                    createRoom();
                }}>
                    Create Room
                </Button>
            </Box>
        </Flex>
    )
}
