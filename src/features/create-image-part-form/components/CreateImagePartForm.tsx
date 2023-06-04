// @flow
import * as React from 'react';
import {FC} from "react";
import {CreatePostPartForm, PostPartProps} from "@/features/create-post-part-form";
import {ImageInput} from "@/features/image-input";

type Props = {
};
export const CreateImagePartForm: FC<Props & PostPartProps> = ({onCancel}) => {
    return (
        <CreatePostPartForm onCancel={onCancel}>
            <ImageInput id={"post_image"} label={"Load image"}/>
        </CreatePostPartForm>
    );
};