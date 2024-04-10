import React, { Component } from "react";
import NumberListItem from "./number_li";

class NumbersList extends Component {
    render() {
        const {numbers, onLockClick} = this.props;
        return (
            <>
            <div className="row p-5 rounded bg-light">
                <div className="col-md-6 col-md-offset-3">
                    <h3>Selected Numbers </h3>
                    <ul className="list-group">
                    {numbers.map(n =>
                        <NumberListItem 
                        key={n.id} 
                        onLockClick={onLockClick} 
                        number={n}/>)}
                    </ul>
                </div>
            </div>
            </>
        );
    }
}

export default NumbersList;