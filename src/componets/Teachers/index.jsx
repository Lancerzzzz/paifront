import React, { Component } from 'react';
import {List,Card} from "antd"

import { teachersdata } from '../../test.data';

import img_home from "../../assets/home.png"

export default class Teachers extends Component {
  render() {
    return (
      <List className="content_list"
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
    dataSource={teachersdata}
    renderItem={item => (
      <List.Item>
        <Card 
        className="itemcard"
        cover={<img  alt="example" src={img_home} />}
        title={item.description}>{item.name}</Card>
      </List.Item>
    )}
  />
    );
  }
}
