import React, { Component } from 'react';
import {List,Card} from 'antd'
import {ranksdata} from "../../test.data"
import img_home from "../../assets/home.png"

import "./index.css"
export default class Rank extends Component {
  render() {
    return <List
    className="rank_list"
    itemLayout="horizontal"
    dataSource={ranksdata}
    renderItem={item => (
      <List.Item>
      <Card 
      className="rankcard"
      cover={<img  className='rankcard_img' alt="example" src={img_home} />}
      title={item.name}>
        <p className="rankcard_text">{item.description}</p>
      </Card>
      </List.Item>
    )}
  />;
  }
}
