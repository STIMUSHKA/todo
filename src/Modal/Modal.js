import { render } from '@testing-library/react'
import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>

                {this.state.isOpen && (
                    <div className='Modal'>
                        <div className='Modal-body'>
                            <h1>Modal title</h1>
                            <p>123</p>
                            <button onClick={() => this.setState({isOpen: false})}>close</button>
                        </div>
                    </div>)}
            </React.Fragment>
        )
    }
}