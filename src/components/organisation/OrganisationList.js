import React, { Component } from "react";
import axios from "axios";

import OrganisationCard from "./OrganisationCard";

class OrganisationList extends Component {
    state = {
        url: `https://api.github.com/organizations?page=1&per_page=140`,
        organisation: [],
        avatar_url: null,
        id: null,       
        description: null,
        name: null,
        location: null,
        email: null,
        followers: null,        
        members_url: null

    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({
            organisation: res.data
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.organisation ? (
                    <div className="row">
                        {this.state.organisation.map(organisation => (
                            <OrganisationCard
                                key={organisation.id}
                                name={organisation.login}
                                url={organisation.avatar_url}
                                description={organisation.description}
                                location={organisation.location}
                                email={this.props.email}
                                followers={organisation.followers}
                                members_url={` https://api.github.com/orgs/${organisation.login}/members`}
                            />
                        ))}
                    </div>
                ) : (
                        <h1>Loading ...</h1>
                    )
                }
            </React.Fragment>
        )
    }

}


export default OrganisationList;
