import React, {InputHTMLAttributes} from 'react';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props}) => {
    return (
        <input
            {...props}
            className={"flex py-1 m-2 px-4 border-2 rounded" +
                " border-gray-400 bg-gray-200 hover:bg-gray-300 " + className}/>
    );
};

export default Input;