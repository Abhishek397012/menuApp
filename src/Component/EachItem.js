import React, { Component } from 'react'

export class EachItem extends Component {
    render() {
        return (
            <div>
               <h1> {this.props.item.heading} </h1>
            </div>
        )
    }
}

export default EachItem
