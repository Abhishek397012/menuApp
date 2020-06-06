import React, { Component } from 'react'

export class EachItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: ''
        }
    }


    render() {
        return (
            <div >
                <div className="name">{this.props.name}</div>
                <div className="price">{`Rs. ${this.props.price}`}</div>
                <br/>
            </div>
        )
    }
}

export default EachItem
