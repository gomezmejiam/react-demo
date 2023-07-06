import React from 'react';
import {Layout} from 'antd';
import NavigationMenu from './NavigationMenu';
import RouteResolver from './RouteResolver';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const ContentDisplay = () => (
    <Layout>
        <Router>
            <NavigationMenu/>
            <RouteResolver/>
        </Router>
    </Layout>
);
export default ContentDisplay;