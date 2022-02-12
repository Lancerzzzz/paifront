import React, { Component } from 'react';
import {List,Card} from 'antd'
import {platformsdata} from "../../test.data"
import img_home from "../../assets/home.png"

import "./index.css"
export default class Platform extends Component {
  render() {

    return (
      <List
      className="platform_list"
      itemLayout="horizontal"
      dataSource={platformsdata}
      renderItem={item => (
        <List.Item>
        <Card 
        className="platformcard"
        cover={<img  className='platformcard_img' alt="example" src={img_home} />}
        title={item.name}>
          <p className="platformcard_text">{item.description}</p>
        </Card>
        </List.Item>
      )}
    />
    );
  }
}
