import React, { Component } from 'react';

export default class Counter extends Component {
    constructor() {
        super()

        this.state = {
            counter: 0
        }
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h3>{ this.state.counter }</h3>
                <button onClick={ this.increment.bind(this) }>+</button>
                <button onClick={ this.decrement.bind(this) }>-</button>
            </div>
        );
    }
}