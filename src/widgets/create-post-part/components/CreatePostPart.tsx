"use client";
import React, {ReactNode, useState} from "react";
import {HStack, VStack} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {CreateHeaderPartForm} from "@/features/create-header-part-form";
import {CreateTextPartForm} from "@/features/create-text-part-form";
import {CreateImagePartForm} from "@/features/create-image-part-form";

const CreatePostPart = () => {
    const [selectedPart, selectPart] = useState<ReactNode | null>(null);

    const cancelPart = () => selectPart(null);

    return (
        <div>
            {selectedPart &&
                selectedPart
            }
            {!selectedPart && <HStack gap={8} align={"stretch"} justifyContent={"stretch"}>
                <Button
                    onClick={() => selectPart(<CreateHeaderPartForm onCancel={cancelPart}/>)}
                    flex={2} type={"submit"}
                    paddingBlock={8}
                    variant={"outline"}
                >
                    <VStack>
                        <AddIcon/>
                        <p>Header</p>
                    </VStack>
                </Button>
                <Button
                    onClick={() => selectPart(<CreateTextPartForm onCancel={cancelPart}/>)}
                    flex={2}
                    type={"submit"}
                    paddingBlock={8}
                    variant={"outline"}
                >
                    <VStack>
                        <AddIcon/>
                        <p>Text</p>
                    </VStack>
                </Button>
                <Button
                    onClick={() => selectPart(<CreateImagePartForm onCancel={cancelPart}/>)}
                    flex={2}
                    type={"submit"}
                    paddingBlock={8}
                    variant={"outline"}
                >
                    <VStack>
                        <AddIcon/>
                        <p>Image</p>
                    </VStack>
                </Button>
            </HStack>}
        </div>

    );
};

export default CreatePostPart;