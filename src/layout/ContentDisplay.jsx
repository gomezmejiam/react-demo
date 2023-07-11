//ContentDisplay.jsx
import React from 'react';
import {Layout} from 'antd';
import styles from './ContentDisplay.module.scss';
import NavigationMenu from './NavigationMenu';
import RouteResolver from './RouteResolver';
import { BrowserRouter as Router} from 'react-router-dom';

const ContentDisplay = () => (
    <Layout className={styles.Container}>
        <Router>
            <NavigationMenu/>
            <RouteResolver/>
        </Router>
    </Layout>
);
export default ContentDisplay;