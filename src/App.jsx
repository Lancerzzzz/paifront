import './App.css';
import React, { Component } from 'react';
import 'antd/dist/antd.min.css';
import { Layout,Menu } from 'antd';
import {Routes,Route,Link} from "react-router-dom";

import logo_icon from "./assets/logo2.png";
import Banner from "./componets/Banner";
import FooterLink from './componets/FooterLink';

import Main from './componets/Main';
import Course from "./componets/Course";
import Teachers from "./componets/Teachers";
import Platform from './componets/Platform';
import Rank from "./componets/Rank";
import About from "./componets/About";
import { navdata } from './test.data';
import {
  HomeOutlined,
  ApartmentOutlined,
  BookOutlined,
  AppstoreAddOutlined,
  StockOutlined,
  CommentOutlined
} from '@ant-design/icons';
const header_icons = [  HomeOutlined,
  ApartmentOutlined,
  BookOutlined,
  AppstoreAddOutlined,
  StockOutlined,
  CommentOutlined]
const { 
  Header, 
  Footer, 
  Content 
} = Layout;

export default class App extends Component {
  render() {
    const navitems  = navdata.navitmes;
    // console.log(navitems)
    return (
      <Layout className="app" theme="light">
        <Header className="Nav0" >
          <div className="header_home_page" >
            <div >
              <img className="header_log" src={logo_icon} alt="log"/>
            </div>
          
            <span className="header_space"/>
            <Menu className="header_menu_bar" theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
              {
                navitems.map((item,k) => {
                  // console.log(item,k)
                  return (
                   
                    <Menu.Item key={k} 
                    icon={React.createElement(header_icons[k])}> <Link to={item.link}>{item.name}</Link></Menu.Item>
                    
                  )
                })
              }
            </Menu>
          </div>
        </Header>
        <Content className="content">
          <div className="content_warp">
            <div className="banner_warp">
              <Banner/>
            </div>
            <div className="content_main_warp">

            <Routes>
              <Route index path="/" element={<Main/>}/>
              <Route path="/course" element={<Course/>}/>
              <Route path="/teachers" element={<Teachers/>}/>
              <Route path="/platform" element={<Platform/>}/>
              <Route path="/rank" element={<Rank/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
  
            </div>  
          </div>
        </Content>
        <Footer className="footer_container">
              <FooterLink/>
        </Footer>
    </Layout>
    );
  }
}

