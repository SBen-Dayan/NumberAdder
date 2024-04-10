import React, { Component } from "react";

class NumberListItem extends Component {
    onButtonClick = () => {
        const {onLockClick, number} = this.props;
        onLockClick(number);
    }
    render() {
        const {number} = this.props;
        return (
            <>
            <li className="list-group-item">
                {number.value}
                <button 
                className="ms-5 btn btn-primary"
                onClick={this.onButtonClick}>
                {number.locked ? 'unlock' : 'lock'}
                </button>
            </li>
            </>);
    }
}

export default NumberListItem;