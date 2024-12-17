import React from "react";

function Env_test() {
    return (
        <>
            <h1>kk</h1>
            <h1>{process.env.REACT_APP_NAME}</h1>
        </>
    );
}

export default Env_test;
