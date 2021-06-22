import { Component } from "react";
import React from "react";

class Input extends Component{
    state = {
        text: ""
    }

    onChange(e){
        this.setState({text: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({text: ""});
        this.props.onSendMessage(this.state.text);
    }

    render(){
        return (
            <div className="mx-2">
                <form className="form-msg" onSubmit={e => this.onSubmit(e)}>
                    <input 
                    className="input-msg"
                    onChange={e => this.onChange(e)}
                    value={this.state.text}
                    type="text"
                    placeholder="Enter your message and press Enter"
                    autoFocus="true"
                    />
                    <button className="button-msg">Send</button>
                </form>
            </div>
        );
    }
}

export default Input;