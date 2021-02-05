import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",

    usernameError: false,
    passwordError: false,
    confirmPasswordError: false,
  }

  onChangeUsername = (e) => {
    const value = e.target.value;
    this.setState({ username: value })

    if (value !== undefined && value.length > 0) {
      if (value.length <= 8) {
        this.setState({ usernameError: true })
      } else {
        this.setState({ usernameError: false })
      }
    } else {
      this.setState({ usernameError: false })
    }
  }

  onChangePassword = (e) => {
    const value = e.target.value;
    const { confirmPassword } = this.state;
    this.setState({ password: value })

    if (value !== undefined && value.length > 0) {
      if (value.length <= 8) {
        this.setState({ passwordError: true })
      } else {
        this.setState({ passwordError: false })
      }

      if (confirmPassword && value !== confirmPassword) {
        this.setState({ confirmPasswordError: true })
      } else {
        this.setState({ confirmPasswordError: false })
      }

    } else {
      this.setState({ passwordError: false })
    }
  }

  onChangeConfirmPassword = (e) => {
    const value = e.target.value;
    const { password } = this.state;
    this.setState({ confirmPassword: value })

    if (value !== undefined && value.length > 0) {
      if (value !== password) {
        this.setState({ confirmPasswordError: true })
      } else {
        this.setState({ confirmPasswordError: false })
      }
    } else {
      this.setState({ confirmPasswordError: false })
    }
  }

  render() {
    const { username, usernameError, password, passwordError, confirmPassword, confirmPasswordError } = this.state;

    return (
      <div className="App">
        <h1>Registration Form</h1>

        <div className="div-mb-20 error-msg">
          {(usernameError || passwordError || confirmPasswordError) && <div>Error/s: </div>}
          {usernameError && <div>Username must be 8 characters and above</div>}
          {passwordError && <div>Password must be 8 characters and above</div>}
          {confirmPasswordError && <div>Confirm Password should be equal to the password</div>}
        </div>

        <div>
          <div className="label">Username</div>
          <input onChange={this.onChangeUsername} />
        </div>
        <div>
          <div>Password</div>
          <input onChange={this.onChangePassword} />
        </div>
        <div>
          <div>Confirm Password</div>
          <input onChange={this.onChangeConfirmPassword} />
        </div>
        <button
          type="submit"
          title="Please input your details first"
          disabled={(!username || usernameError) || (!password || passwordError) || (!confirmPassword || confirmPasswordError)}
        >
          Register
        </button>
      </div>
    )
  }
}