import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClasses, getClass, setCurrentClass } from '../actions/classActions';

import { Menu } from 'antd';
// import async from 'async';

class ClassMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: [''],
            loading: true
        }
    }

    componentDidMount() {
        let classes = [];
        this.loadClassesID().then(classArr => {
            classArr.forEach(classID => {
                this.loadClassesObj(classID).then((classObj) => {
                    classes.push(classObj);
                    if (classes.length === classArr.length) {
                        this.setState({
                            classes: classes,
                            loading: false
                        });
                    }
                });
            });
        });
    }

    loadClassesID = () => {
        let classArr = [];
        return new Promise((resolve, reject) => {
            this.props.getClasses().then(res => {
                classArr = res.payload;
                resolve(classArr);
            }).catch(e => {
                reject(e);
            });
        });
    }

    loadClassesObj = (classID) => {
        let classObj;
        return new Promise((resolve, reject) => {
            this.props.getClass(classID).then(res => {
                classObj = res.payload.data;
                resolve(classObj);
            }).catch(e => {
                reject(e);
            });
        })
    }

    handleMenuClick = (e) => {
        this.props.setCurrentClass(e.key);
    }

    render() {
        return (
            <div>
                <h1 style={{ color: 'white', marginLeft: '30px', marginTop: '20px', marginBottom: '15px' }}>Planista</h1>
                <Menu
                    theme='dark'
                    style={{ width: '100%' }}
                    mode="inline"
                    onClick={this.handleMenuClick}
                >
                    {!this.state.loading ?
                        (
                            this.state.classes.map((obj) => {
                                return (
                                    <Menu.Item key={obj._id}>{obj.name + ' ' + obj.number}</Menu.Item>
                                );
                            })
                        ) : (
                            <Menu.Item>Loading</Menu.Item>
                        )
                    }
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getClasses, getClass, setCurrentClass })(ClassMenu);