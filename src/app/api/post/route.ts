import {NextResponse} from "next/server";
import {getAllPosts} from "@/shared/lib/prisma/post";


export const GET = async () => {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
};

export const POST = async () => {

    const posts = await getAllPosts();
    return NextResponse.json(posts);
};