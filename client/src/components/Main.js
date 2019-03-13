import React, { Component } from 'react';
import { Layout } from 'antd';
import ClassMenu from './ClassMenu';
import TabMenu from './TabMenu';

const {
    Header, Footer, Sider, Content,
} = Layout;

class Main extends Component {
    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider>
                        <ClassMenu />
                    </Sider>
                    <Layout>
                        <Content>
                            <TabMenu/>
                        </Content>
                        <Footer style={{height:'20px'}}>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Main;