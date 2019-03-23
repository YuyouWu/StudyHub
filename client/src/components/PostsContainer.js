import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import axios from 'axios';

class PostsContainer extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
            this.setState({
                posts: posts.data,
                loading: false
            });
        })
    }

    render() {
        return (
            <div style={{marginLeft: '20px'}}>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.posts}
                    loading={this.state.loading}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a href="#">{item.title}</a>}
                                description={item.body}
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default PostsContainer;