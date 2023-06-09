import React, {OptionHTMLAttributes} from 'react';



const Option: React.FC<OptionHTMLAttributes<HTMLOptionElement>> = ({children, className, ...props}) => {
    return (
        <option
            {...props}
            className={"flex py-1 m-2 px-4 border-2 rounded" +
                " border-gray-400 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer " + className}>
            {children}
        </option>
    );
};

export default Option;