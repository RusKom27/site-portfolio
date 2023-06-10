import {deletePost} from "@/shared/lib/prisma/post";
import {NextResponse} from "next/server";

export const DELETE = async (req: Request, {params}: {params: {id: string}}) => {
    const post = await deletePost(params.id);
    return NextResponse.json(post);
};