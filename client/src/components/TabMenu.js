import React, { Component } from 'react';
import { Tabs, Icon, Button } from 'antd';
import PostsContainer from './PostsContainer';

const TabPane = Tabs.TabPane;

class TabMenu extends Component {
    render() {
        const userAction =
            <Button style={{marginRight:'5px'}}>
                <Icon type="user" />
            </Button>;

        return (
            <div>
                <Tabs
                    defaultActiveKey="1"
                    tabBarExtraContent={userAction}
                    style={{ marginLeft: '10px', marginTop: '10px', marginRight: '10px', minHeight: '98vh', backgroundColor: 'white' }}
                >
                    <TabPane tab="Posts" key="1">
                        <PostsContainer/>
                    </TabPane>
                    <TabPane tab="Resources" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Other" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default TabMenu;