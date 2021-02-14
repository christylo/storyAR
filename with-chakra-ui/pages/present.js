import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {
    Heading,
    Flex,
    Box,
    Button,
    Input,
    FormControl,
    Spacer,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Grid,
    Text, Image
} from "@chakra-ui/react";
import socketIOClient from "socket.io-client";
import {useEffect, useState} from "react";
import jsCookie from 'js-cookie';
import {Fonts} from "../components/fonts";
import Header from '../components/header'


// import Slider from "react-slick";
// import bacteria from "/bacteria.png";
// import food from "../public/food.png";
// import skull from "../public/skull.png";
// import bug from "../public/bug.png";
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


//const ENDPOINT = "https://storyar-server.herokuapp.com/";
const ENDPOINT = "https://localhost:4000";


export default function Present() {
    const [response, setResponse] = useState("");
    const [accessCode, setAccessCode] = useState("");
    const [hidden, setHidden] = useState(true);
    const [imageIndex, setImageIndex] = useState(0);

    // 1. Create fxn in useEffect 
    // 2. Use it to send index to backend, useeffect can listen to imageIndex so it executes only when index is changing
    // 3. Rewrite nextSlide and prevSlide b/c it'll be based off the index # changing
    // 4. Just remove the nextslide/prevslide arrows and such

    function nextSlide() {
        console.log("The next slide socket")
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: {accessCode: jsCookie.get('accessCode')}
        });
        socket.emit("slideEvent", jsCookie.get('accessCode'), "next");
        //console.log(response);
    }

    function previousSlide() {
        console.log("The prev slide socket")

        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: {accessCode: jsCookie.get('accessCode')}
        });
        socket.emit("slideEvent", jsCookie.get('accessCode'), "previous");
        //console.log(response);
    }

    function hideModel() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: {accessCode: jsCookie.get('accessCode')}
        });
        socket.emit("modelHide", jsCookie.get('accessCode'), hidden);
        //console.log(response);
    }

    useEffect(() => {
        console.log("sending");
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: {accessCode: jsCookie.get('accessCode')}
        });
        // console.log(accessCode);
        socket.emit("setModel", jsCookie.get('accessCode'), imageIndex);
    }, [imageIndex, setImageIndex]);


    // const NextArrow = ({ nextImage }) => {
    //     return (<Button fontFamily="Quicksand" m={25} padding={5} onClick={() => {
    //         console.log(`NextImage from NextArrow ${nextImage}`)
    //         nextSlide();
    //         nextImage();
    //     }}>
    //         Next
    //     </Button>)
    // };

    // const PrevArrow = ({ prevImage }) => {

    //     return (<Button fontFamily="Quicksand"
    //         m={25}
    //         padding={5}
    //         onClick={() => {
    //             previousSlide();
    //             prevImage();
    //         }}>
    //         Prev
    //     </Button>)

    // };

    // const settings = {
    //     infinite: true,
    //     lazyLoad: true,
    //     speed: 300,
    //     slidesToShow: 2,
    //     centerMode: true,
    //     centerPadding: 0,
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />,
    //     beforeChange: (current, next) => setImageIndex(next),
    // };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images = ["/bacteria.png", "/food.png", "/skull.png"]

    return (
        <div className={styles.presentContainer}>
            <Fonts/>

            <Header/>

            <Flex align="center" justify="center">
                <Box>
                    <Image src={"/defBackground.svg"}/>
                </Box>
            </Flex>

            <Flex align="center" justify="center">
                <Box>
                    <Heading fontFamily="Quicksand" color="white">
                        Present Room Code: {jsCookie.get('accessCode')}
                    </Heading>


                    {/* <Image src="./public/bacteria.png"></Image> */}
                    {/* <Button
                        fontFamily="Quicksand"
                        m={25}
                        padding={5}
                        onClick={() => {
                            previousSlide();
                        }}
                    >
                        Previous
                    </Button>

                    <Button fontFamily="Quicksand" m={25} padding={5} onClick={() => {
                        nextSlide();
                        console.log("HEY I'm calling next slide")
                    }}>
                        Next
                    </Button> */}

                </Box>
            </Flex>

            <div>
                {/*//<input value={imageIndex} onChange={setImageIndex} type="number"/>*/}
                <Carousel
                    arrows
                    value={imageIndex}
                    onChange={setImageIndex}
                >
                    <img src="/bacteria.png"/>
                    <img src="/food.png"/>
                    <img src="/skull.png"/>
                    <img src="/bug.png"/>
                </Carousel>
                <Flex align="center" justify="center">
                    <Button m={25} padding={5} onClick={() => {
                        setHidden(!hidden);
                        hideModel();
                    }}>
                        {hidden === true ? "Hide" : "Hidden"}
                    </Button>
                </Flex>
            </div>
        </div>
    )
}


