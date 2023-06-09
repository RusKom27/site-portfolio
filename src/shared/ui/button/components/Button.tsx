import React, {ButtonHTMLAttributes} from 'react';



const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className, ...props}) => {
    return (
        <button
            {...props}
            className={"flex py-1 m-2 px-4 border-2 rounded" +
                " border-gray-400 bg-gray-200 hover:bg-gray-300 " + className}>
            <div className={"flex w-full h-full flex-col justify-center"}>
                {children}
            </div>
        </button>
    );
};

export default Button;