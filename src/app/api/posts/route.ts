import {NextResponse} from "next/server";
import {createPost, getAllPosts} from "@/shared/lib/prisma/post";


export const GET = async () => {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
};

export const POST = async () => {
    const post = await createPost({
        title: "New post",
        cover_image: "",
        topic: "gamedev",
        tags: [],
    });
    return NextResponse.json(post);
};

