// @flow
import * as React from 'react';
import {FC} from "react";
import {CreatePostPartForm, PostPartProps} from "@/features/create-post-part-form";
import {Textarea} from "@/shared/ui";

type Props = {
};
export const CreateTextPartForm: FC<Props & PostPartProps> = ({onCancel}) => {
    return (
        <CreatePostPartForm onCancel={onCancel}>
            <Textarea className={"outline-1"} name={"text"} rows={4}/>
        </CreatePostPartForm>
    );
};