import React, {useEffect, useState} from 'react';

function Header() {

    const [title, setTitle] = useState("Ready for some TRIVIA?!");

    useEffect(() => {
        console.log("Title changed to: " +  title);
    }, [title]);

    function handleTitle(){
        setTitle("You sure are! Believe in Yourself!")
    }

    return (
        <div className={"header"}>
            <h1>{title}</h1>
            <button onClick={handleTitle}>I know! Click me!</button>
        </div>
    );
}

export default Header;