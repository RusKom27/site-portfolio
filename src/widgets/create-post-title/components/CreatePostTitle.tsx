import React, {FC} from 'react';
import {ImageInput} from "@/features/image-input";
import {Prisma} from "@prisma/client";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {Select, Option} from "@/shared/ui";

interface CreatePostTitleProps {
    post: Prisma.postCreateInput
}

const CreatePostTitle: FC<CreatePostTitleProps> = ({post}) => {
    return (
        <div className="flex flex-column">
            <div className={"flex-[2]"}>
                <ImageInput src={post.cover_image} id={"title_image"} label={"Load title image"}/>
            </div>
            <div className={"flex flex-col h-full flex-[6]"}>
                <div className={"flex flex-row w-full"}>
                    <label htmlFor={"title"}>Title</label>
                    <input id={"title"} value={post.title}/>
                </div>
                <div className={"flex flex-row flex-wrap w-full justify-start"}>
                    <div className={"flex flex-row w-full"}>
                        <p>ergerg</p><CloseIcon/>
                    </div>
                </div>
                <div className={"flex flex-row w-full"}>
                    <Select>
                        <Option selected={post.topic == "gamedev"}>Gamedev</Option>
                        <Option selected={post.topic == "frontend"}>Frontend</Option>
                        <Option selected={post.topic == "backend"}>Backend</Option>
                    </Select>
                </div>
            </div>

        </div>
    );
};

export default CreatePostTitle;