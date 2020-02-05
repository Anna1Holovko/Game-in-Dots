import React, {useState, useRef, Component} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class LeaderList extends React.Component{
    state = {
        todos: []
    }
    componentDidMount() {
        fetch('https://starnavi-frontend-test-task.herokuapp.com/winners')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todos: data })
                console.log(this.state.todos)
            })
            .catch(console.log)
    }
    render() {
        return (
            <div className="container" style={{
                marginLeft: '350px',
            }}>
                <div className="col-xs-12">
                    <h1>Leader Board</h1>
                    {this.state.todos.map((todo) => (
                        <div className="card">
                            <div className="card-body">
                                <li> {todo.winner}&nbsp;&nbsp;&nbsp;{todo.date}</li>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
ReactDOM.render(<LeaderList/>, document.getElementById('leader2'));



function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

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
var fcolor = "white";
// var random = 0;


easyMode.addEventListener("click", function(){
    setTimeout(randomize, 2000);
    // easyMode.classList.add("selected");
    // field = 25;
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = "white";
        square[i].addEventListener("click", function () {
            // this.setState({random:this.state.random + randomize});
            var clickedColor = this.style.background;
            var pickedColor = "blue";
            var fcolor = "white";
            var gcolor="green";
            if (clickedColor === pickedColor) {
                // this.setState({background: this.style.background});
                // messageDisplay.textContent = "Good Job!";
                resetButton.textContent = "Play Again";
                clicksUr += 1;
                document.getElementById("clicksUr").innerHTML = clicksUr;
                if (clicksUr > 3){
                    messageDisplay.textContent = "Winner: " + myInput.value;
                }else {
                    messageDisplay.textContent = "";
                }
                // changeColors(fcolor);
                setTimeout(randomize, 2000);
                this.style.background = "green";
            }
                // else {
            //     this.style.background = "null";
            //     // messageDisplay.textContent = "Try Again";
            //     clicksC += 1;
            //     document.getElementById("clicksC").innerHTML = clicksC;
            // }
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
                // messageDisplay.textContent = "Try Again";
                clicksC += 1;
                document.getElementById("clicksC").innerHTML = clicksC;
            }
        })
    }
});

resetButton.addEventListener("click", function(){
    this.setState(this.baseState)
    // resetButton.textContent = "Play";
    //     for (var i = 0; i < square.length; i++) {
    //     square[i].style.background = "white";
    //     document.getElementById("clicksUr").innerHTML = "";
    //     document.getElementById("clicksC").innerHTML = "";
    //     changeColors(fcolor);
    // }
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



