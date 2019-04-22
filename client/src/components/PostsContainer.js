import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import axios from 'axios';

import { connect } from 'react-redux';
import { getCurrentClass } from '../actions/classActions';


class PostsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount() {        
        this.props.getCurrentClass();

        console.log(this.props);

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

const mapStateToProps = (state) => ({
    currentClass: state.classes.currentClassID
});

export default connect(mapStateToProps, { getCurrentClass })(PostsContainer);