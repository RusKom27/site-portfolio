"use client";
import React, {ReactNode, useState} from "react";
import {CreateHeaderPartForm, CreateTextPartForm, CreateImagePartForm} from "@/features";
import {Button} from "@/shared/ui";
import {PlusIcon} from "@heroicons/react/24/solid";

const CreatePostPart = () => {
    const [selectedPart, selectPart] = useState<ReactNode | null>(null);

    const cancelPart = () => selectPart(null);

    return (
        <div>
            {selectedPart &&
                selectedPart
            }
            {!selectedPart &&
                <div className={"flex max-h-[100px] w-1/2 mx-auto justify-stretch items-stretch gap-2"} >
                    <Button className={"flex-1"}
                        onClick={() => selectPart(<CreateHeaderPartForm onCancel={cancelPart}/>)}
                        type={"button"}
                    >
                        <PlusIcon/>
                        <p>Header</p>
                    </Button>
                    <Button className={"flex-1"}
                        onClick={() => selectPart(<CreateTextPartForm onCancel={cancelPart}/>)}
                        type={"button"}
                    >
                        <PlusIcon/>
                        <p>Text</p>
                    </Button>
                    <Button className={"flex-1"}
                        onClick={() => selectPart(<CreateImagePartForm onCancel={cancelPart}/>)}
                        type={"button"}
                    >
                        <PlusIcon/>
                        <p>Image</p>
                    </Button>
                </div>
            }
        </div>

    );
};

export default CreatePostPart;