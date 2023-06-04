// @flow
import * as React from 'react';
import {FC} from "react";
import {CreatePostPartForm, PostPartProps} from "@/features/create-post-part-form";
import {Textarea} from "@chakra-ui/react";

type Props = {
};
export const CreateTextPartForm: FC<Props & PostPartProps> = ({onCancel}) => {
    return (
        <CreatePostPartForm onCancel={onCancel}>
            <Textarea name={"text"} rows={4} variant={"outline"}/>
        </CreatePostPartForm>
    );
};