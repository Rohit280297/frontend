import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import { Layout, Menu } from 'antd';
import CategoryDrawer from '../_categoryMenu/categoryDrawer';

const { Header } = Layout;

class NavigationBar extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
        <Header>
          <div className="logo" />
            <Menu
             theme="dark"
             mode="horizontal"
             defaultSelectedKeys={['1']}
             style={{ lineHeight: '64px' }}
            >
              <Menu.Item>
                <Link to="/category">
                  <CategoryDrawer />
                </Link>    
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/recent">Recent Uploaded</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/community">Community</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/contact">Contact Us</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/donate">Donate Us</Link>
              </Menu.Item>
          </Menu>
        </Header>    
    );
  }
}

export default NavigationBar;