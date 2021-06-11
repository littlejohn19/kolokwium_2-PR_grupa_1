import React, {useState} from 'react';
const DChome = () => {
    const [value, setValue] = useState("Hello, world");
    return (
        <div className="jumbotron">
            <h1 className="display-4">{value}</h1>
            <hr className="my-4"/>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => setValue("Hello, Darek")}>Kliknij mnie</a>
                </p>
        </div>
    )
};
export default DChome;