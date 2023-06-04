import React, {FC, FormEventHandler, ReactNode, useState} from 'react';
import {Input, InputProps} from "@chakra-ui/input";
import {Image} from "@chakra-ui/image";
import {Box, Center} from "@chakra-ui/react";


interface Props {
    label: ReactNode
    height?: string | number
    width?: string | number
}

const ImageInput: FC<InputProps & Props> = ({label, height = "200px", width = "200px", id, ...props}) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const onInput: FormEventHandler<HTMLInputElement> = (event) => {
        const files = event.currentTarget.files;
        if (files) setImageFile(files[0]);
    };

    return (
        <div>

            <label htmlFor={id}>

                <Box w={width} h={height} cursor={"pointer"} borderWidth={2} borderStyle={"dashed"}>
                    <Center w={"100%"} h={"100%"}>
                        {!imageFile && <Box position={"absolute"} textAlign={"center"}>
                            { label }
                        </Box>}
                        {imageFile && <Image
                            height={"100%"}
                            objectFit={"contain"}
                            src={URL.createObjectURL(imageFile)}
                            alt={"preview"}
                        />}
                    </Center>

                </Box>
            </label>
            <Input
                {...props}
                onInput={onInput}
                id={id}
                display={"none"}
                type={"file"}
                accept={"image/*"}
            />
        </div>
    );
};

export default ImageInput;