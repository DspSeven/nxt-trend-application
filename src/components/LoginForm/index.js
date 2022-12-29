// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    response: '',
  }

  getUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  submitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({username: '', password: '', response: data.error_msg})
    }
  }

  render() {
    const {response, username, password} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form onSubmit={this.submitLoginForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div>
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              type="text"
              value={username}
              placeholder="Username"
              onChange={this.getUsername}
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={this.getPassword}
            />
          </div>
          <button type="submit">Login</button>
          <br />
          <p>{response}</p>
        </form>
      </div>
    )
  }
}
export default LoginForm
