import React, {useState, useRef, Component} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// class Appsh extends React.Component {
//     render() {
//         return (
//             <div className="Appsh">
//                 <Example1></Example1>
//
//             </div>
//         );
//     }
// }
//
// export default Appsh;

// const socialMediaList = data.SocialMedias;
//
// class Example1 extends React.Component {
//     render() {
//         return (
//             <div className="Appsh">
//             <ul>
//                 {socialMediaList.map(s => (<li>{s}</li>))}
//             </ul>
//             </div>
//         );
//     }
// }
// export default Example1;


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.state = {isToggleOn: true};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*<select value={this.state.mygame}>*/}
                {/*    <option>Pick game mode</option>*/}
                {/*    <option value="easyl">Easy</option>*/}
                {/*    <option value="normal">Normal</option>*/}
                {/*    <option value="hardl">Hard</option>*/}
                {/*</select>*/}
                {/*<input type="text" placeholder={"Enter your name"} />*/}
                {/*<button onClick={this.handleClick}>{this.state.isToggleOn ? 'Play' : 'Play again '}</button>*/}
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('butt')
);

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export const users =require('./data/posts')

function UserItem(props){
    const user = props.user
    return (<li>{user.winner}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.date}</li>)
}

function UserList(props){
    const users = props.users;
    const items = users.map((user) => {
        return <UserItem key={`${user.id}`} user={user}/>;
    });
    return (<ul>{items}</ul>);
}

ReactDOM.render(<UserList users={users}/>, document.getElementById('namesh'));



// function Showurname() {
//     let [name, setName] = useState("");
//
//     let nameRef = useRef();
//
//     const submitButton = () => {
//         setName(nameRef.current.value);
//     };
//
//     return (
//         <div className="App">
//             <div>
//                 <input ref={nameRef} type="text" placeholder={"Enter your name"} />
//                 &nbsp;&nbsp;&nbsp;
//                 <button type="button" onClick={submitButton}>
//                     Play
//                 </button>
//                 <p>{name}</p>
//             </div>
//         </div>
//     );
// }
// const rootElement = document.getElementById("shn");
// ReactDOM.render(<Showurname />, rootElement);



// var field = 25;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyMode = document.querySelector("#easyMode");
var normalMode = document.querySelector("#normalMode");
var hardMode = document.querySelector("#hardMode");
var square = document.querySelectorAll(".square");
var myInput = document.getElementById('myInput');
var clicksUr = 0;
var clicksC = 0;


easyMode.addEventListener("click", function(){
    setTimeout(randomize, 2000);
    easyMode.classList.add("selected");
    // field = 25;
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = "white";
        square[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            var pickedColor = "blue";
            var fcolor = "white";
            var gcolor="green";
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Good Job!";
                resetButton.textContent = "Play Again";
                clicksUr += 1;
                document.getElementById("clicksUr").innerHTML = clicksUr;
                if (clicksUr > 15){
                    messageDisplay.textContent = "Winner: " + myInput.value;
                }else {
                    messageDisplay.textContent = "";
                }
                // changeColors(fcolor);
                setTimeout(randomize, 2000);
                this.style.background = "green";
            } else {
                this.style.background = "red";
                // messageDisplay.textContent = "Try Again";
                clicksC += 1;
                document.getElementById("clicksC").innerHTML = clicksC;
            }
        })
    }
});

normalMode.addEventListener("click", function(){
    setTimeout(randomize, 1000);
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = "white";
        square[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            var pickedColor = "blue";
            var fcolor = "white";
            if (clickedColor === pickedColor) {
                resetButton.textContent = "Play Again";
                clicksUr += 1;
                document.getElementById("clicksUr").innerHTML = clicksUr;
                changeColors(fcolor);
                setTimeout(randomize, 1000);
                this.style.background = "green";
            } else {
                this.style.background = "red";
                messageDisplay.textContent = "Try Again";
                clicksC += 1;
                document.getElementById("clicksC").innerHTML = clicksC;
            }
        })
    }



});

hardMode.addEventListener("click", function(){
    setTimeout(randomize, 900);
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = "white";
        square[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            var pickedColor = "blue";
            var fcolor = "white";
            if (clickedColor === pickedColor) {
                resetButton.textContent = "Play Again";
                clicksUr += 1;
                document.getElementById("clicksUr").innerHTML = clicksUr;
                changeColors(fcolor);
                setTimeout(randomize, 900);
                this.style.background = "green";
            } else {
                this.style.background = "red";
                messageDisplay.textContent = "Try Again";
                clicksC += 1;
                document.getElementById("clicksC").innerHTML = clicksC;
            }
        })
    }
});

resetButton.addEventListener("click", function(){
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = "white";
    }
})

// //This picks a random square from the array and changes color
const randomize = () => {
    let randomSquare = square[Math.floor(Math.random() * square.length)];
    randomSquare.style.background = "blue";
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function changeColors(color){
    //loop through all squares
    for (var i = 0; i < square.length; i++) {
        //change each color to match given color
        square[i].style.background = color;
    }
}

serviceWorker.unregister();



