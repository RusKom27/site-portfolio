// @flow
import * as React from 'react';
import {FC} from "react";
import {CreatePostPartForm, PostPartProps} from "@/features/create-post-part-form";
import {Input} from "@/shared/ui";

type Props = {
};
export const CreateHeaderPartForm: FC<Props & PostPartProps> = ({onCancel}) => {
    return (
        <CreatePostPartForm onCancel={onCancel}>
            <Input type={"text"}/>
        </CreatePostPartForm>
    );
};