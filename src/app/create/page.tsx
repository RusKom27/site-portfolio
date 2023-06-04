"use client";

import React, {FC} from 'react';
import {ChakraProvider, Container, Divider, Heading, Text} from "@chakra-ui/react";
import {CreatePostTitle} from "@/widgets/create-post-title";

interface PageProps {

}

const Page: FC<PageProps> = () => {
    return (
        <ChakraProvider>
            <Container>

            </Container>
        </ChakraProvider>
    );
};

export default Page;