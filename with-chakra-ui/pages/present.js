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
    Text
} from "@chakra-ui/react";
import socketIOClient from "socket.io-client";
import { useState } from "react";
import jsCookie from 'js-cookie';
import { Fonts } from "../components/fonts";
import Header from '../components/header'

import Slider from "react-slick";
import bacteria from ".././images/bacteria.png";
import food from "./images/food.png";
import skull from "./images/skull.png";
import bug from "./images/bug.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const ENDPOINT = "https://storyar-server.herokuapp.com/";
//const ENDPOINT = "https://localhost:4000";


export default function Present() {
    const [response, setResponse] = useState("");
    const [accessCode, setAccessCode] = useState("");
    const [hidden, setHidden] = useState(true);

    function nextSlide() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: {accessCode: jsCookie.get('accessCode')}
        });
        socket.emit("slideEvent", jsCookie.get('accessCode'), "next");
        //console.log(response);
    }

    function previousSlide() {
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

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };

    return (
        <div className={styles.presentContainer}>
            <Fonts />

            <Header/>

            <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>

            <Flex align="center" justify="center" height="60vh">
                <Box>
                    <Heading fontFamily="Quicksand" color="white">
                        Present Room Code: {jsCookie.get('accessCode')}
                    </Heading>




                    <Button
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
                    }}>
                        Next
                    </Button>
                    <Button m={25} padding={5} onClick={() => {
                        setHidden(!hidden);
                        hideModel();
                    }}>
                        {hidden === true ? "Hide" : "Hidden"}
                    </Button>
                </Box>
            </Flex>
        </div>
    )
}


