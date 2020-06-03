import React, { Component } from 'react'

export class EachItem extends Component {
    render() {
        return (
            <div>
                <div className="name">{this.props.name}</div>
                <div className="price">{this.props.price}</div>
                <br/>
            </div>
        )
    }
}

export default EachItem
