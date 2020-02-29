import React from 'react';

const withClass = (WrappedComponent, style) => {

    return (props) => {
        return(
            <div className={style}>
                <WrappedComponent props={props}/>
            </div>
        );
    }
};

export default withClass;