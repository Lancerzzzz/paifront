import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './index.css'
const BgElement = Element.BgElement;
export default class Banner extends Component  {
    render(){
        return (
          <BannerAnim prefixCls="banner-user" autoPlay>
            <Element 
              prefixCls="banner-user-elem"
              key="0"
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                  background: '#364D79',
                }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                趣匠心
              </TweenOne>
              <TweenOne className="banner-user-text" 
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
              编创小匠少儿编程
              </TweenOne>
            </Element>
            <Element 
              prefixCls="banner-user-elem"
              key="1" 
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                  background: '#64CBCC',
                }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                致未来
              </TweenOne>
              <TweenOne className="banner-user-text" 
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
              编创小匠少儿编程
              </TweenOne>
            </Element>
          </BannerAnim>);
      }
    }