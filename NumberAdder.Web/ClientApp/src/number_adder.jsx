import React, { Component } from "react";
import NumbersTable from "./numbers_table";
import { v4 as guid } from "uuid";
import NumbersList from "./numbers_ul";

class NumberLister extends Component {
    state = {
        numbers : []
    }
    
    onAddClick = () => {
        const number = {
            id : guid(),
            value : this.randomNumber(), 
            selected : false,
            locked : false
        };
        const {numbers} = this.state;
        this.setState({numbers : [...numbers, number]})
    }

    onSelectClick = number => {
        this.findAndChangeState(number.id, n => n.selected = !n.selected) 
    }
    
    onLockClick = number => {
        this.findAndChangeState(number.id, n => n.locked = !n.locked)  
    }
    
    findAndChangeState = (numberId, cb) => {
        const copy = [...this.state.numbers];
        const number = copy.find(n => n.id == numberId);
        if (!number) {
            return;
        }
        cb(number);
        this.setState({numbers : copy});
    }

    randomNumber = function () {
        return Math.round(Math.random() * 100);
    }

    render() {
        const {numbers} = this.state;
        return (
            <>
            <div className="container">
                <div className="row col-md-8 offset-2 mt-5">
                    <button onClick={this.onAddClick} className="btn btn-dark w-100">Add</button>
                </div>
                <NumbersTable 
                numbers={numbers}
                onSelectClick={this.onSelectClick}/>
                <br/>
                <NumbersList
                        numbers={numbers.filter(n => n.selected)}
                onLockClick={this.onLockClick}/>
            </div>
            </>
        );
    }
}

export default NumberLister;