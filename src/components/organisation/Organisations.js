import React, { Component } from "react";
import OrganisationList from "./OrganisationList";

class Organisations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      companyname: null,
      id: null,
      url: null,
      avatar_url: null,
      description: null,
      name: null,
      location: null,
      email: null,
      public_repos: null,
      followers: null,
      following: null,
      created_at: null,
      updated_at: null
    }
  }

  getCompany(companyname) {
    return fetch(`https://api.github.com/orgs/${companyname}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        return response;
      })
  }

  async handleSubmit(e) {
    e.preventDefault();
    let company = await this.getCompany(this.refs.companyname.value);
    this.setState({
      companyname: company.login,
      id: company.id,
      url: company.url,
      avatar_url: company.avatar_url,
      name: company.name,
      location: company.location,
      email: company.email,
      description: company.description,
      followers: company.followers,
      following: company.following,
      created_at: company.created_at,
      updated_at: company.updated_at
    })
  }

  render() {
    let company;
    if (this.state.companyname) {

      company =
        <div>
          <img alt="avatar" src={this.state.avatar_url} width='200px' />
          <p>
            {"company: " + this.state.name}<br />
            {"id: " + this.state.id}<br />
            {"location: " + this.state.location}<br />
            {"email: " + this.state.email}<br />
            {"description: " + this.state.description}<br />
            {"followers: " + this.state.followers}<br />
            {"following: " + this.state.following}<br />
            {"created_at: " + this.state.created_at}<br />
            {"updated_at: " + this.state.updated_at}<br />
          </p>
        </div>

    }

    return (

      <div className="container">
        <div className="row">
          <div className="col-2">
            <form className="input-group mb-3">
              <input className="form-control" ref='companyname' type='text' placeholder='companyname'></input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={e => this.handleSubmit(e)} >Search</button>
              </div>
            </form>
            <p>{company}</p>
          </div>
          <div className="col-10">
            <OrganisationList />
          </div>

        </div>
      </div>

    )

  }
}


export default Organisations;