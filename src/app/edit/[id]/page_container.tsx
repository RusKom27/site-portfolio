"use client";

import React, {FC} from 'react';
import {ChakraProvider, Container, Divider, Heading, Text} from "@chakra-ui/react";
import {CreatePostPart} from "../../../widgets/create-post-part";
import {CreatePostTitle} from "@/widgets/create-post-title";
import {Prisma} from "@prisma/client";

interface PageContainerProps {
    post: Prisma.postCreateInput,
}

const PageContainer: FC<PageContainerProps> = ({post}) => {
    return (
        <ChakraProvider>
            <Container>
                <CreatePostTitle post={post}/>
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

export default PageContainer;