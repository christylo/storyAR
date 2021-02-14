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
import {useState, useEffect} from "react";

const ENDPOINT = "https://localhost:4000";


export default function Join() {
    const [response, setResponse] = useState("");
    const [accessCode, setAccessCode] = useState("");
    const [code, setCode] = useState("");
    //const socket = socketIOClient(ENDPOINT, {reconnection: true, reconnectionAttempts: 3});

    function joinRoom() {
        //socket.emit("joinRoom", accessCode);
    }

    useEffect(() => {
        console.log("listening");
        const socket = socketIOClient(ENDPOINT, {query: {accessCode}});
        socket.on("slideEvent", data => {
            setResponse(data);
            console.log(data);
        });
    }, [accessCode]);

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box>
                <Heading>
                    Join Room
                </Heading>
                <Heading>
                    Currently Connected to: {accessCode}
                </Heading>
                        <Input mt={5} placeholder="Access Code" value={code} onChange={(e) => setCode(e.target.value)}/>
                    <Button mt={5} onClick={() => {
                        setAccessCode(code);
                    }}>
                        Join
                    </Button>
            </Box>
        </Flex>
    )
}
