import React from 'react';
import {getAllPosts} from "@/shared/lib/prisma/post";
import NoopLoader from "next/dist/build/webpack/loaders/noop-loader";
import {Prisma} from "@prisma/client";
import {PostList} from "@/features/post-list";


const Page = async () => {
    const posts: Prisma.postCreateInput[] = await getAllPosts();

    if (!posts) return <NoopLoader/>;

    return (
        <PostList posts={posts}/>
    );
};

export default Page;