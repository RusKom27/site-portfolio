"use client";
import React, {ReactNode} from 'react';
import {XMarkIcon} from "@heroicons/react/24/solid";


interface TagProps {
    children: ReactNode
    onRemove: () => void
}

const Tag: React.FC<TagProps> = ({children, onRemove}) => {
    return (
        <div
            className={"flex flex-row max-h-[40px] my-auto px-2 gap-1 items-center border-2 rounded-full" +
                " border-gray-400 bg-amber-100 ml-2"}
        >
            <p>{children}</p>
            <button type={"button"} onClick={onRemove}
                className={"p-1 my-1 rounded-full bg-gray-200 hover:bg-gray-300 border-2 border-gray-400"}
            >
                <XMarkIcon className={"w-full h-[14px]"}/>
            </button>

        </div>

    );
};

export default Tag;