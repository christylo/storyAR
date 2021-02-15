import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box, Button, Flex, Heading, Image, Input, useToast} from "@chakra-ui/react";
import {Fonts} from "../components/fonts";
import {useState} from "react";
import jsCookie from "js-cookie";
import {useRouter} from "next/router";
import Header from '../components/header'
import axios from "axios";

const randomstring = require('randomstring');

const ENDPOINT = "https://storyar-server.herokuapp.com/";


export default function Create() {
    const [response, setResponse] = useState("");
    const [data, setData] = useState("");
    const router = useRouter();
    const toast = useToast();

    function askAI(values) {

        let promts = values + " Rephrased in plain language a second grader can understand:";
        console.log(promts);
        axios.post("https://api.openai.com/v1/engines/davinci/completions",
            {
                prompt: promts,
                max_tokens: 64,
                temperature: 0.3,
                top_p: 1,
                n: 1,
                stream: false,
                logprobs: null,
                stop: "\n"
            },
            {headers: {Authorization: 'Bearer ${process.env.OPENAI}'}})
            .then(function (response) {
                console.log("Response:",response.data.choices[0].text);
                toast({
                    title: "Result",
                    description: response.data.choices[0].text,
                    status: "success",
                    duration: 9000,
                    isClosable: true,

                })
            })
            .catch(function (error) {
                console.log("Error", error);
                // toast({
                //     title: "Error",
                //     description: error.response.data.error,
                //     status: "error",
                //     duration: 9000,
                //     isClosable: true,
                // })
            });

    }

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

                <Flex align="center" justify="center">
                    <Header/>
                </Flex>

                {/*<Flex align="center" justify="center">*/}
                {/*    <Box>*/}
                {/*        <Image src={"/createBack.svg"}/>*/}
                {/*    </Box>*/}
                {/*</Flex>*/}

                <Flex align="center" justify="center">
                    <Heading m={"10"} w={"100wv"} fontFamily={"Tomorrow"} color={"white"}>
                        Summarize for your Class!
                    </Heading>
                </Flex>
                <Flex align="center" justify="center">
                    <Input h={100} color={"white"} value={data}  onChange={(e) => setData(e.target.value) }>

                    </Input>
                </Flex>
                <Flex align="center" justify="center">
                    <Button
                        mt={5}
                        onClick={() => {
                            askAI(data);
                        }}
                        size="lg"
                        color="white"
                        backgroundColor="#8055DA"
                        height="48px"
                        width="200px"
                        colorScheme="pink"
                        fontFamily="Quicksand"
                    >
                        Ask
                    </Button>
                </Flex>

            </div>
        </div>
    )
}
