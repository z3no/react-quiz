import './Header.css';
import React, {useEffect, useState} from 'react';

function Header() {

    const [title, setTitle] = useState("Trivia!");

    useEffect(() => {
        console.log("Title changed to: " +  title);
    }, [title]);

    function handleTitle(){
        setTitle("Anime!")
    }

    return (
        <div className="header">
            <div className="box">
                <div className="inner">
                    <h1>{title}</h1>
                </div>
                <div className="inner">
                    <h1>{title}</h1>
                </div>
            </div>
            <button className="about-button" onClick={handleTitle}>About?!</button>
        </div>
    );
}

export default Header;