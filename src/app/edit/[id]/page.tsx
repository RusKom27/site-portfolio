import React, {FC} from 'react';
import {Metadata} from "next";
import {getPost} from "@/shared/lib/prisma/post";
import NoopLoader from "next/dist/build/webpack/loaders/noop-loader";
import {CreatePostPart, CreatePostTitle} from "@/widgets";
import {HeadText} from "@/shared/ui";

type PageProps = {
    params: {
        id: string;
    };
};


export async function generateMetadata({params: { id }}: PageProps): Promise<Metadata> {
    const post = await getPost(id);

    return {
        title: post?.title,
    };
}


// @ts-ignore
const Page: FC<PageProps> = async ({params: {id}}) => {
    const post = await getPost(id);

    if (!post) return <NoopLoader/>;

    return (
        <div className="mx-auto lg:w-2/3">
            <CreatePostTitle post={post}/>
            <hr/>
            <HeadText>
                qewrgqe wergw ergwe ergwerg
            </HeadText>
            <p>
                rgrgwerg fqgr ergwrg wergw reger
            </p>
            <hr />
            <CreatePostPart/>
        </div>
    );
};

export default Page;