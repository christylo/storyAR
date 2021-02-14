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
    const [page, setPage] = useState(0);
    const [hidden, setHidden] = useState(false);
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
            setPage(data);
        });
        socket.on("modelHide", data => {
            console.log("Set Hidden");
            setHidden(data);
        });
    }, [accessCode]);

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box>
                <Heading>
                    Join Room
                </Heading>
                <Heading>
                    {(accessCode === "") ? <div>Not Connected</div> : <div>Currently Connected to: {accessCode}</div>}
                </Heading>
                <Heading>
                    Model: {page}
                </Heading>
                <Heading>
                    Hidden: {hidden ? "True" : "False"}
                </Heading>
                        <Input mt={5} placeholder="Access Code" value={code}  onChange={(e) => setCode(e.target.value)}/>
                    <Button mt={5} onClick={() => {
                        setAccessCode(code);
                    }}>
                        Join
                    </Button>
            </Box>
        </Flex>
    )
}
