import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClasses, getClass } from '../actions/classActions';

import { Menu } from 'antd';

class ClassMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            classes: [],
            loading: true
        }
    }

    async componentDidMount(){
        let classes = [];
        await this.props.getClasses().then((res)=> {
            res.payload.forEach(subject => {
                this.props.getClass(subject).then(classObj => {
                    classes.push(classObj.payload.data);
                });
            });
        });
        this.setState({
            classes: classes,
            loading: false
        });
    }

    render(){
        return (
            <div>
                <h1 style={{ color: 'white', marginLeft: '30px', marginTop: '20px', marginBottom: '15px' }}>Planista</h1>
                <Menu
                    theme='dark'
                    style={{ width: '100%'}}
                    mode="inline"
                >
                    {this.state.classes.map((classObj)=> {
                        return (
                            <Menu.Item key={classObj._id}>{classObj.name + ' ' + classObj.number}</Menu.Item>
                        );
                    })}
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getClasses, getClass })(ClassMenu);