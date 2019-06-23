import React, { Component } from "react";
import UserList from "./UserList";
class Users extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      id: null,
      url: null,
      avatar_url: null,
      followers: null,
      following: null,
      created_at: null,
      updated_at: null
    }
  }
  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        return response;
      })
  }

  async handleSubmit(e) {
    e.preventDefault();
    let user = await this.getUser(this.refs.username.value);
    this.setState({
      username: user.login,
      id: user.id,
      url: user.url,
      avatar_url: user.avatar_url,
      followers: user.followers,
      following: user.following,
      created_at: user.created_at,
      updated_at: user.updated_at

    })
  }

  render() {
    let user;
    if (this.state.username) {
      user =
        <div>
          <img alt="avatar" src={this.state.avatar_url} width='200px' />
          <p>
            {"username: " + this.state.username} <br />
            {"id: " + this.state.id}<br />
            {"followers: " + this.state.followers}<br />
            {"following: " + this.state.following}<br />
            {"created_at: " + this.state.created_at}<br />
            {"updated_at: " + this.state.updated_at}<br />
          </p>

        </div>
    };

    return (

      <div className="container">
        <div className="row">
          <div className="col-2">
            <form className="input-group mb-3">
              <input className="form-control" ref='username' type='text' placeholder='username'></input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={e => this.handleSubmit(e)} >Search</button>
              </div>
            </form>
            <p>{user}</p>
          </div>
          <div className="col-10">

            <UserList />
          </div>

        </div>
      </div>

    )
  }

}


export default Users;