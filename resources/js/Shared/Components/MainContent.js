import React from 'react';

const MainContent = (props) => {
    return (
        <>
            <div className="w-full pt-10">
                {props.children}
            </div>
        </>
    )
}

export default MainContent;
