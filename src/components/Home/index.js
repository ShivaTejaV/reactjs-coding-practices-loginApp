// Write your code here
import './index.css'
import {Component} from 'react'

class Home extends Component {
  state = {isLoggedIn: false}

  logInOrOut = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg">
        {isLoggedIn && <h1 className="heading">Welcome User</h1>}
        {isLoggedIn && (
          <button className="button" type="button" onClick={this.logInOrOut}>
            Logout
          </button>
        )}

        {!isLoggedIn && <h1 className="heading">Please Login</h1>}
        {!isLoggedIn && (
          <button className="button" type="button" onClick={this.logInOrOut}>
            Login
          </button>
        )}
      </div>
    )
  }
}

export default Home
