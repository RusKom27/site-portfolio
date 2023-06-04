// @flow
import * as React from 'react';
import {FC, ReactNode} from "react";
import {Button, HStack, VStack} from "@chakra-ui/react";

export interface PostPartProps {
    onCancel: () => void
    children?: ReactNode
}
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