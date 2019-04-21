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
                <Layout style={{ minHeight: '100vh'}}>
                    <Sider style={{
                        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                    }}>
                        <ClassMenu />
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Content>
                            <TabMenu/>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Main;