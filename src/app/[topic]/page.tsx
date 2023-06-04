import React from 'react';
import {Prisma} from "@prisma/client";
import {getAllPosts} from "@/shared/lib/prisma/post";

const Page = async () => {
    const posts = await getAllPosts();

    return (
        <div>
            {posts.map((post: Prisma.postCreateInput) => post.title)}
        </div>
    );
};

export default Page;