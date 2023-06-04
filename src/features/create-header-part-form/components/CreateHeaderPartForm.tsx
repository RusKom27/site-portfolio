// @flow
import * as React from 'react';
import {FC} from "react";
import {CreatePostPartForm, PostPartProps} from "@/features/create-post-part-form";
import {Input} from "@chakra-ui/input";

type Props = {
};
export const CreateHeaderPartForm: FC<Props & PostPartProps> = ({onCancel}) => {
    return (
        <CreatePostPartForm onCancel={onCancel}>
            <Input type={"text"}/>
        </CreatePostPartForm>
    );
};