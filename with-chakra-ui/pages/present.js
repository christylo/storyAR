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
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const ENDPOINT = "https://storyar-server.herokuapp.com/";

const useStyles = makeStyles({
    root: {
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
});

function srcset(image, width, height, rows = 1, cols = 1) {
    return `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format 1x,
    ${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`;
}

export default function Present() {
    const [response, setResponse] = useState("");
    const [accessCode, setAccessCode] = useState("");
    const [hidden, setHidden] = useState(true);
    const classes = useStyles();

    function nextSlide() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: jsCookie.get('accessCode')
        });
        socket.emit("slideEvent", jsCookie.get('accessCode'), "next");
        //console.log(response);
    }

    function previousSlide() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: jsCookie.get('accessCode')
        });
        socket.emit("slideEvent", jsCookie.get('accessCode'), "previous");
        //console.log(response);
    }

    function hideModel() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: jsCookie.get('accessCode')
        });
        socket.emit("modelHide", jsCookie.get('accessCode'), hidden);
        //console.log(response);
    }

    return (
        <div className={styles.presentContainer}>
            <Fonts />
            <Box>
                <Grid templateColumns="repeat(3, 2fr)" gap={100}>
                    <Link href="/">
                        <Text fontSize={48} color="white" fontFamily="BreadCrumb">• storyAR</Text>
                    </Link>

                    <Spacer></Spacer>
                    <div className={styles.navTabs}>
                        <Breadcrumb separator=" " spacing={4} fontFamily="BreadCrumb" fontWeight={50} color="white">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href="/create">how does it work</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href="/create">try it out</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </Grid>

            </Box>
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
            <ImageList rowHeight={200} gap={1} className={classes.root}>
                {itemData.map((item) => {
                    const cols = item.featured ? 2 : 1;
                    const rows = item.featured ? 2 : 1;

                    return (
                        <ImageListItem key={item.img} cols={cols} rows={rows}>
                            <img srcSet={srcset(item.img, 250, 200, rows, cols)} alt={item.title} />
                            <ImageListItemBar
                                title={item.title}
                                position="top"
                                actionIcon={
                                    <IconButton
                                        aria-label={`star ${item.title}`}
                                        className={classes.icon}
                                    >
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                                className={classes.titleBar}
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
        </div>
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];
