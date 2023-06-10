"use client";
import React, {useEffect, useState} from 'react';
import {PostList} from "@/features/post-list";
import {Button} from "@/shared/ui";
import {redirect} from "next/navigation";


const Page = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch("/api/posts")
            .then(res => res.json())
            .then(data => setPosts(data));

    }, []);


    const createPostAndRedirect = () => {
        fetch("/api/posts", {
            "method": "POST",
        }).then( res => res.json()).then(data => document.location.href = `/edit/${data.id}`);
    };
    if (!posts) return <div>Loading...</div>;

    return (
        <div className={"mx-auto lg:w-2/3"}>
            <PostList posts={posts}/>
            <Button onClick={createPostAndRedirect}>Create</Button>
        </div>

    );
};

export default Page;