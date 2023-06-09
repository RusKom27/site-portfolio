import React, {TextareaHTMLAttributes} from 'react';

const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({className, ...props}) => {
    return (
        <textarea
            {...props}
            className={"flex py-1 m-2 px-4 border-2 rounded" +
                " border-gray-400 bg-gray-200 hover:bg-gray-300 " + className}/>
    );
};

export default Textarea;