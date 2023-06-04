"use client";

import React, {FC} from 'react';
import {ChakraProvider, Container} from "@chakra-ui/react";


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