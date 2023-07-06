import React from 'react';
import './styles/global.scss';
import { Layout, theme } from 'antd';
import ContentDisplay from "./layout/ContentDisplay";


const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <ContentDisplay/>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>

        </Layout>
    );
};

export default App;