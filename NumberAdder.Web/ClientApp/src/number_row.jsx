import React, { Component } from "react";

class NumberRow extends Component {
    onButtonClick = () => {
        const {onSelectClick, number} = this.props;
        onSelectClick(number);
    }

    render() {
        const {value, selected, locked} = this.props.number;

        return (
            <>
            <tr>
                <td>
                    {value}
                </td>
                <td>
                    <button 
                    onClick={this.onButtonClick}
                    disabled={locked ? true : false} 
                    className={`btn ${selected ? 'btn-danger' : 'btn-primary'}`}>
                        {selected ? 'Remove from Selected' : 'Add to Selected'}
                    </button>
                </td>
            </tr>
            </>
        );
    }
}

export default NumberRow;