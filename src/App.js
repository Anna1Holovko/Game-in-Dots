import React from 'react';
import ReactDOM from 'react-dom';

// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';


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
                    <h1>Leader List</h1>
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


class App extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {/*<Menu/>*/}
                    {/*<Board />*/}
                    <LeaderList/>
                    {/*<SquaresContainer/>*/}
                    {/*<Square />*/}
                    {/*<Counter/>*/}
                    {/*<Box/>*/}
                    {/*<Test/>*/}
                    {/*<Test10/>*/}

                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default App;

