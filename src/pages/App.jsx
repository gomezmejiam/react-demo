import React, { useEffect } from 'react';
import '@styles/global.scss';
import { Layout, theme } from 'antd';
import ContentDisplay from '@layout/ContentDisplay';
import { QueryClient, QueryClientProvider } from 'react-query';

const { Header, Content, Footer} = Layout;

// Crear una instancia de QueryClient
const queryClient = new QueryClient();

const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useEffect(() => {
        document.title = "Mi increíble aplicación React";
    }, []);

    return (
        // Envolver la aplicación con el QueryClientProvider
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <ContentDisplay/>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </QueryClientProvider>
    );
};

export default App;
