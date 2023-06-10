"use client";

import React, {FC} from 'react';
import {Prisma} from "@prisma/client";
import {Button} from "@/shared/ui";


interface PostListProps {
    posts: Prisma.postCreateInput[]
}

const PostList: FC<PostListProps> = ({posts}) => {

    const deletePost = (post: Prisma.postCreateInput) => {
        fetch(`/api/posts/${ post.id }`, {
            "method": "DELETE",
        }).then(()  => {});
    };

    return (
        <table>
            <thead className={"border-2 border-gray-400"}>
                <tr className={"bg-gray-300"}>
                    <th>Title</th>
                    <th>Topic</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post =>
                    <tr key={post.id} className={"border-2 border-gray-400 bg-gray-300 hover:bg-gray-400"}>
                        <td className={"px-5"}>{post.title}</td>
                        <td className={"px-5"}>{post.topic}</td>
                        <td className={"px-5"}><Button><a href={`edit/${post.id}`}>Edit</a></Button></td>
                        <td className={"px-5"} onClick={() => deletePost(post)}><Button>Delete</Button></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default PostList;