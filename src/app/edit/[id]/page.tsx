import React, {FC} from 'react';
import {Metadata} from "next";
import {getPost} from "@/shared/lib/prisma/post";
import NoopLoader from "next/dist/build/webpack/loaders/noop-loader";
import PageContainer from "@/app/edit/[id]/page_container";

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

    return <PageContainer post={post}/>;
};

export default Page;