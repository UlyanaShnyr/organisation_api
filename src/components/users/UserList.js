import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";

class UserList extends Component {

    state = {
        url: `https://api.github.com/users?page=1&per_page=140`,
        avatar_url: null,
        id: null,

    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({
            users: res.data,
        });

    }

    render() {
        return (
            <React.Fragment>
                {this.state.users ? (
                    <div className="row">
                        {this.state.users.map(users => 
                            (
                            <UserCard
                                key={users.id}
                                name={users.login}
                                url={users.avatar_url}
                            />
                            )
                        )}
                    </div>
                ) : (
                        <h1>Loading ...</h1>
                    )
                }
            </React.Fragment>
        )
    }

}


export default UserList;
