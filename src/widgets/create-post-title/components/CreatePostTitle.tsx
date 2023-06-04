import React from 'react';
import {Box, FormLabel, HStack, Select, Tag, TagCloseButton, TagLabel, VStack} from "@chakra-ui/react";
import {Input} from "@chakra-ui/input";
import {ImageInput} from "@/features/image-input";

const CreatePostTitle = () => {
    return (
        <HStack gap={8}>
            <Box flex={3}>
                <ImageInput id={"title_image"} label={"Load title image"}/>
            </Box>
            <VStack h={"100%"} flex={6}>
                <HStack w={"100%"}>
                    <FormLabel htmlFor={"title"}>Title</FormLabel>
                    <Input id={"title"}/>
                </HStack>
                <HStack wrap={"wrap"} w={"100%"} display={"flex"} justifyContent={"start"}>
                    <Tag><TagLabel>ergerg</TagLabel><TagCloseButton/></Tag>
                </HStack>
                <HStack w={"100%"}>
                    <Select>
                        <option>Gamedev</option>
                        <option>Frontend</option>
                        <option>Backend</option>
                    </Select>
                </HStack>
            </VStack>

        </HStack>
    );
};

export default CreatePostTitle;