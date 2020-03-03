import React from 'react';

const withClass = (WrappedComponent, style) => {

    return (props) =>
        (
            <div className={style}>
                <WrappedComponent {...props} />
            </div>
        );

};

export default withClass;