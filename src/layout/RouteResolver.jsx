import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '../config/routes';
import {Layout, theme} from "antd";
const {Content, Sider } = Layout;

const RouteResolver = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Content style={{margin: '24px 16px 0'}}>
            <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.component/>}/>
                    ))}
                </Routes>
            </div>
        </Content>
    );
}
export default RouteResolver;