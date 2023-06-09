// @flow 
import * as React from 'react';
import {FC, ReactNode} from "react";

type Props = {
    children: ReactNode,
};
export const PostPart: FC<Props> = ({children}) => {
    return (
        <div className={"flex flex-col"}>
            {children}
        </div>
    );
};