"use client";
import React, {FC, FormEventHandler, InputHTMLAttributes, ReactNode, useState} from 'react';


interface Props {
    label: ReactNode
}

const ImageInput: FC<InputHTMLAttributes<HTMLInputElement> & Props> = (
    {
        label,
        id,
        src,
        ...props
    }) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const onInput: FormEventHandler<HTMLInputElement> = (event) => {
        const files = event.currentTarget.files;
        if (files) setImageFile(files[0]);
    };

    return (
        <div className={"w-[250px] h-[250px]"}>
            <label htmlFor={id}>
                <div className={"cursor-pointer border-2 border-dashed w-full h-full"}>
                    <div className={"relative content-center w-full h-full"}>
                        {(!imageFile && !src)  &&
                            <div className={"absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"}>
                                { label }
                            </div>
                        }
                        {(imageFile || src) && <img
                            className={"w-full h-full object-contain"}
                            src={imageFile ? URL.createObjectURL(imageFile) : src as string}
                            alt={"preview"}
                        />}
                    </div>

                </div>
            </label>
            <input
                {...props}
                className={"hidden"}
                onInput={onInput}
                id={id}
                type={"file"}
                accept={"image/*"}
            />
        </div>
    );
};

export default ImageInput;