// @flow
import * as React from 'react';
import {FC} from "react";
import {PostPartProps} from "@/features/create-post-part-form";
import {Button} from "@/shared/ui";

export const CreatePostPartForm: FC<PostPartProps> = ({onCancel, children}) => {
    return (
        <form action={""} onSubmit={(event) => {
            event.preventDefault();
            console.log(event);
        }
        }>
            <div className={"flex flex-col"}>
                {children}
                <div className={"flex flex-row"}>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button type={"submit"}>Create</Button>
                </div>
            </div>
        </form>
    );
};