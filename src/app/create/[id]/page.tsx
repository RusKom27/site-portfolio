"use client";

import React, {FC} from 'react';
import {ChakraProvider, Container, Divider, Heading, Text} from "@chakra-ui/react";
import {CreatePostPart} from "../../../widgets/create-post-part";
import {CreatePostTitle} from "@/widgets/create-post-title";

interface PageProps {

}

const Page: FC<PageProps> = () => {
    return (
        <ChakraProvider>
            <Container>
                <CreatePostTitle/>
                <Divider orientation={"horizontal"} marginBlock={4}/>
                <Heading>
                    qewrgqe wergw ergwe ergwerg
                </Heading>
                <Text>
                    rgrgwerg fqgr ergwrg wergw reger
                </Text>
                <Divider orientation={"horizontal"} marginBlock={4}/>
                <CreatePostPart/>
            </Container>
        </ChakraProvider>
    );
};

export default Page;