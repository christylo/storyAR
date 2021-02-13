import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Heading,
    Button,
    Stack
} from "@chakra-ui/react";

export default function ChooseImage() {


    return (
        <>
            <h1>Class Lessons</h1>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>


                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Heading>
                I'm a heading brooooo

            </Heading>
            <Button colorScheme="blue">
                LMAOOOO
            </Button>
            <Stack spacing={4} direction="row" align="center">
                <Button colorScheme="teal" size="xs">
                    Button
  </Button>
                <Button colorScheme="teal" size="sm">
                    Button
  </Button>
                <Button colorScheme="teal" size="md">
                    Button
  </Button>
                <Button colorScheme="teal" size="lg">
                    Button
  </Button>
            </Stack>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}