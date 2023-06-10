"use client";
import React, {FC} from 'react';
import {ImageInput} from "@/features/image-input";
import {Prisma} from "@prisma/client";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {Select, Option, Input, Tag, Button} from "@/shared/ui";
import {useFormik} from "formik";
import {XMarkIcon} from "@heroicons/react/24/solid";

interface CreatePostTitleProps {
    post: Prisma.postCreateInput
}

const CreatePostTitle: FC<CreatePostTitleProps> = ({post}) => {

    const formik = useFormik({
        initialValues: {
            image: post.cover_image,
            title: post.title,
            tags: post.tags,
            topic: post.topic,
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <form className="flex flex-column" onSubmit={formik.handleSubmit}>
            <div className={"flex-[2]"}>
                <ImageInput
                    src={formik.values.image}
                    onChange={formik.handleChange}
                    id={"title_image"}
                    label={"Load title image"}
                />
            </div>
            <div className={"flex flex-col h-full flex-[6]"}>
                <div className={"flex flex-row w-full"}>
                    <label htmlFor={"title"}>Title</label>
                    <Input
                        id={"title"}
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={"flex flex-row flex-wrap w-full justify-start"}>
                    <Tag onRemove={() => console.log("tag")}>wefwef</Tag>
                    <Button className={"rounded-full"}>add tag</Button>
                </div>
                <div className={"flex flex-row w-full"}>
                    <Select defaultValue={formik.values.topic}>
                        <Option value={"gamedev"}>Gamedev</Option>
                        <Option value={"frontend"}>Frontend</Option>
                        <Option value={"backend"}>Backend</Option>
                    </Select>
                </div>
            </div>

        </form>
    );
};

export default CreatePostTitle;