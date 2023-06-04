// @flow
import * as React from 'react';
import {FC} from "react";
import {Button, HStack, VStack} from "@chakra-ui/react";
import {PostPartProps} from "@/features/create-post-part-form";

export const CreatePostPartForm: FC<PostPartProps> = ({onCancel, children}) => {
    return (
        <form action={""} onSubmit={(event) => {
            event.preventDefault();
            console.log(event);

        }
        }>
            <VStack>
                {children}
                <HStack>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button type={"submit"}>Create</Button>
                </HStack>
            </VStack>
        </form>
    );
};