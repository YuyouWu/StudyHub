import React, { Component } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

class ClassMenu extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: 'white', marginLeft: '30px', marginTop: '20px', marginBottom: '15px' }}>Planista</h1>
                <Menu
                    theme='dark'
                    style={{ width: '100%'}}
                    mode="inline"
                >
                    <Menu.Item key="1">CS 101</Menu.Item>
                    <Menu.Item key="2">CE 12</Menu.Item>
                    <Menu.Item key="3">ECON 1</Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default ClassMenu;