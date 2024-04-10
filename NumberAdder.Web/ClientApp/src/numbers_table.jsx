import React, { Component } from "react";
import NumberRow from "./number_row";

class NumbersTable extends Component {
    render() {
        const {numbers, onSelectClick} = this.props;
        return (
            <>
            <table className="table table-hover table-striped table-bordered mt-5">
                <thead>
                    <tr>
                        <td>Number</td>
                        <td>Add/Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {numbers.map(n => <NumberRow key={n.id} number={n} onSelectClick={onSelectClick}/>)}
                </tbody>
            </table>
            </>
        );
    }
}

export default NumbersTable;