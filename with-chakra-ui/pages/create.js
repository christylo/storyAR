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
import jsCookie from "js-cookie";
import {useRouter} from "next/router";
const randomstring = require('randomstring');

const ENDPOINT = "https://localhost:4000";


export default function Create() {
    const [response, setResponse] = useState("");
    const router = useRouter();

    function createRoom() {
        console.log("Creating Room");

        let accessCode = randomstring.generate({
            length: 4,
            charset: 'alphabetic',
            capitalization: 'uppercase',
            readable: 'true'
        })

        //const socket = socketIOClient(ENDPOINT, {reconnection: false, reconnectionAttempts: 3, query: {accessCode}});
        jsCookie.set('accessCode', accessCode);

        // socket.emit('createRoom');
        // socket.on('createRoom', msg => {
        //     console.log(msg)
        // });
        // console.log(response);

        router.push('/present');
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
