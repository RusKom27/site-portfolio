import React, {SelectHTMLAttributes} from 'react';



const Select: React.FC<SelectHTMLAttributes<HTMLSelectElement>> = ({children, className, ...props}) => {
    return (
        <select
            {...props}
            className={"flex py-1 m-2 px-4 border-2 rounded" +
                " border-gray-400 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer " + className}>
            {children}
        </select>
    );
};

export default Select;