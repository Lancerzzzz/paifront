import React, { Component } from 'react';
import { List, Card, Divider} from 'antd';

import {contentdata} from "../../test.data";
import './index.css'
import img_home from './home.png'

export default class Main extends Component {
  render() {
    return (
      <div className="content_container">
      {
        contentdata.map((items,k)=>{
          const item = items.children
          return(<div>
            <Divider orientation="center"  className="divider_font">{items.title}</Divider>
            <List className="content_list"
              bordered
              grid={{
                gutter: 2,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              dataSource={item}
              size='small'
              renderItem={item => (
                <List.Item >
                 
                    <Card  className="itemcard" 
                    hoverable={true}
                    bordered={true} 
                    title={item}
                    cover={<img  alt="example" src={img_home} />}>
                      Card content
                    </Card>
                 
                </List.Item>
              )}
            />
            </div>)
        })
      }
      </div>

    );
  }
}
