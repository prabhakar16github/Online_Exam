import React, { Component } from 'react'

export default class login extends Component {
    constructor(props){
        super();
        this.state = {
            username : "",
            password : "",

        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        alert(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    render() {
        return (
            <div>
                <center>
                    <h1>Login Form</h1>
                    <input type="text" placeholder="User Name" name="username" value={this.state.username} onChange={this.onChange} /><br/>
                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/><br/>
                    <input type="submit" value="Submit" name="submit" />
                </center>
            </div>
        )
    }
}
