import { useEffect, useState } from "react";

export default function FunctionToCheck() {
    const [count, setCount] = useState(0);

    //useEffect to replicate componentDidMount and componentDidUpdate
    useEffect(() => {
        //this code block will runs after every render
        console.log("Component did mount or update");
        //Clean up function (replicating componentWillUnmount)
        return () => {
            console.log("Component will unmount");
        };
    });



    return (
        <>
            <h3>Hi it is a functional Components.</h3>
            <div>
                <p>Count {count}</p>
                <button onClick={() => setCount(count + 1)}>Click me!</button>
            </div>
        </>
    );
};