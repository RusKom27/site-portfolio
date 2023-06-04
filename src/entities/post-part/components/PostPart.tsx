// @flow 
import * as React from 'react';
import {FC, ReactNode} from "react";
import {VStack} from "@chakra-ui/react";

type Props = {
    children: ReactNode,
};
export const PostPart: FC<Props> = ({children}) => {
    return (
        <VStack>
            {children}
        </VStack>
    );
};