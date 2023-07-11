//NavigationMenu.jsx
import {Layout, Menu} from 'antd';
import routes from '@config/routes';
import React from "react";
import {Link} from "react-router-dom";
const {  Sider } = Layout;

const NavigationMenu = () =>
     (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {routes.map((item, index) => (
                    <Menu.Item key={item.path} icon={<item.icon/>}>
                        <Link to={item.path}>{item.title}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );

export default NavigationMenu;
