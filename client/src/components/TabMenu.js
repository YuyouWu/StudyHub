import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class TabMenu extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" style={{marginLeft:'10px', marginTop:'10px', marginRight:'10px', minHeight:'95vh', backgroundColor:'white'}}>
                    <TabPane tab="Posts" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Resources" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Other" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default TabMenu;