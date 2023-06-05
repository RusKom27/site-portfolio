"use client";

import React, {FC} from 'react';
import {ChakraProvider, HStack, Text, VStack} from "@chakra-ui/react";
import {Prisma} from "@prisma/client";
import Link from "next/link";


interface PostListProps {
    posts: Prisma.postCreateInput[]
}

const PostList: FC<PostListProps> = ({posts}) => {
    return (
        <ChakraProvider>
            <VStack alignItems={"start"}>
                {posts.map(post =>
                    <Link href={`edit/${post.id}`} key={post.id}>
                        <HStack flex={2} justifyItems={"start"}>
                            <Text backgroundColor={"coral"} w={200}>{post.title}</Text>
                            <Text backgroundColor={"coral"} w={200}>{post.topic}</Text>
                        </HStack>
                    </Link>
                )}
            </VStack>
        </ChakraProvider>
    );
};

export default PostList;