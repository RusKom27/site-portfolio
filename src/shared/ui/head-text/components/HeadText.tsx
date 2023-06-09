import React, {HTMLAttributes} from 'react';

const HeadText: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({className, children, ...props}) => {
    return (
        <h1
            {...props}
            className={"text-3xl font-bold " + className}
        >
            {children}
        </h1>
    );
};

export default HeadText;