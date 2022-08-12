# React: Kahoot but better, at least let's try!
This is my first React project and will be a mini trivia quiz application

## What are we doing?!
We are going to make a quiz site/app that hopefully will be better than Kahoot! Let's set the bar high!
We're starting with a simple react project and keep on adding layers of complexity untill we have a super fun quiz.

To help us we are going to use **the open trivia database**. From there we can fetch multiple choice questions with possible answers and the correct one!

***

## Must-haves
- A trivia style quiz
- Settings (subject, difficulty, amount of questions,...)
- Score/Rapport card

***

## Extra's
- Go wild! Safari, jungle, back to nature?
- Make it super, super mobile friendly
- Deploy it online
- Keep high scores, there can only be one leader!
- Connect with Node and Socket.io to make it multiplayer!

***

## Getting started

- Step 1:
  - In my terminal and my becode directory `npx create-react-app react-quiz`
  - This will create a new React app for us
- Step 2:
  - Create `Components`!
  - Let's start with a header component.
  - Created a components folder, with a file called `Header.js`
  - So first I copied the **Hook** example they provided, this didn't show anything for me in my browser. So I changed it.
  - By removing the extra curly brackets around title and creating a handleTitle() function the header became visible.
```javascript
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
```
- Step 3:
  - So I want to create a 'Quiz' I could create a **Quiz component** that will start our quiz. Maybe I should keep it simple and start from here.
  - I chose for questions about Japanese Anime and Manga, 10 random questions, random difficulty. Created the api link, and here we will get our data from.
    - [x] Get the questions
    - [x] Display questions
    - [x] Get correct answer and incorrect answers
    - [x] Display as buttons
    - [x] On answer click go to next question
    - [ ] Add a score counter
    - [ ] Check if the answer is correct or not
    - [ ] Give it a color green if correct
    - [ ] Give it a red color if it's wrong
    - [ ] STYLING!!
  - These are some first steps I want to make for the game and then build further once I manage to get these up and running


## Resources:

[What are dependency arrays in React?](https://devtrium.com/posts/dependency-arrays)
[How to use async functions in useEffect](https://devtrium.com/posts/async-functions-useeffect)
[React documentation](https://reactjs.org/)


