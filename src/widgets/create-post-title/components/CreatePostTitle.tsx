import React, {FC} from 'react';
import {Box, FormLabel, HStack, Select, Tag, TagCloseButton, TagLabel, VStack} from "@chakra-ui/react";
import {Input} from "@chakra-ui/input";
import {ImageInput} from "@/features/image-input";
import {Prisma} from "@prisma/client";

interface CreatePostTitleProps {
    post: Prisma.postCreateInput
}

const CreatePostTitle: FC<CreatePostTitleProps> = ({post}) => {
    return (
        <HStack gap={8}>
            <Box flex={3}>
                <ImageInput src={post.cover_image} id={"title_image"} label={"Load title image"}/>
            </Box>
            <VStack h={"100%"} flex={6}>
                <HStack w={"100%"}>
                    <FormLabel htmlFor={"title"}>Title</FormLabel>
                    <Input id={"title"} value={post.title}/>
                </HStack>
                <HStack wrap={"wrap"} w={"100%"} display={"flex"} justifyContent={"start"}>
                    <Tag><TagLabel>ergerg</TagLabel><TagCloseButton/></Tag>
                </HStack>
                <HStack w={"100%"}>
                    <Select>
                        <option selected={post.topic == "gamedev"}>Gamedev</option>
                        <option selected={post.topic == "frontend"}>Frontend</option>
                        <option selected={post.topic == "backend"}>Backend</option>
                    </Select>
                </HStack>
            </VStack>

        </HStack>
    );
};

export default CreatePostTitle;