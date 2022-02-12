import React, { Component } from 'react';
import {List, Divider} from "antd"

import {contactdata} from "../../test.data"

import "./index.css"
export default class FooterLink extends Component {
  render() {
    return (
      <div className="footer_main">
      <Divider orientation="center" className="divider_font">联系我们</Divider>
      <List
        className="footer_link"
        grid={{ gutter: 8, column: 2 }}
        size="small"
        bordered
        dataSource={contactdata}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      </div>
    );
  }
}
