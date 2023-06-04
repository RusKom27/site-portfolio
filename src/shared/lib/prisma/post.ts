import prisma from "@/shared/lib/prisma/index";
import {Prisma} from "@prisma/client";

// READ
export const getAllPosts = async () => {
    return prisma.post.findMany({});
};

export const getPost = async (id: string) => {
    return prisma.post.findUnique({
        where: { id },
    });
};

// CREATE

export const createPost = async (input: Prisma.postCreateInput) => {

    //file-server https://files.ruslanzhurnyy.website/api/file

    return prisma.post.create({
        data: input,
    });
};

// UPDATE
export const updatePost = async (id: string, updateData: Prisma.postCreateInput) => {
    return prisma.post.update({
        where: {
            id,
        },
        data: {
            ...updateData,
        },
    });
};

// DELETE
export const deletePost = async (id: string) => {
    return prisma.post.delete({
        where: {
            id,
        },
    });
};