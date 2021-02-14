import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {
    Box,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spacer,
    Grid,
    Text,
    Image, Flex
} from "@chakra-ui/react";
import {Fonts} from "../components/fonts";
import socketIOClient from "socket.io-client";
import {useState} from "react";
import jsCookie from "js-cookie";
import {useRouter} from "next/router";
import Header from '../components/header'

const randomstring = require('randomstring');

const ENDPOINT = "https://storyar-server.herokuapp.com/";


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
        <div>
            <div className={styles.createContainer}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <Fonts/>

                <Header/>

                <Flex align="center" justify="center">
                    <Box>
                        <Image src={"/createBack.svg"}/>
                    </Box>
                </Flex>

                <Flex align="center" justify="center">
                    <Button
                        mt={5}
                        onClick={() => {
                            createRoom();
                        }}
                        size="lg"
                        color="white"
                        backgroundColor="#8055DA"
                        height="48px"
                        width="200px"
                        colorScheme="pink"
                        fontFamily="Quicksand"
                    >
                        create room
                    </Button>
                </Flex>

            </div>
        </div>
    )
}
