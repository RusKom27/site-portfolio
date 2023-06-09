"use client";

import React, {FC} from 'react';
import {Prisma} from "@prisma/client";
import Link from "next/link";


interface PostListProps {
    posts: Prisma.postCreateInput[]
}

const PostList: FC<PostListProps> = ({posts}) => {
    return (
        <div className="">
            {posts.map(post =>
                <a href={`edit/${post.id}`} key={post.id}>
                    <div className={"flex flex-start"} >
                        <p>{post.title}</p>
                        <p>{post.topic}</p>
                    </div>
                </a>
            )}
        </div>
    );
};

export default PostList;