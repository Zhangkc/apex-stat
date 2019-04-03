import React from 'react'
import './profile.css'
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      platform:this.props.match.params.platform,
      id:this.props.match.params.id,
    }
  }

  handler = function(e) {
    //e is always the last arg
    console.log(e)
    this.props.history.push('/')
  }

  componentWillMount(){
    console.log(this.props.match.params)
    
  }

  componentDidMount(){
    //console.log(this.props.history.location.query)
    try {
      fetch(`/api/v1/player?platform=${this.state.platform}&name=${this.state.id}`,{
        method: 'GET',
        cache: 'no-cache',
        headers:new Headers({
          'Authorization':'eH1MzNoi04bjFVWGw0OnDXwtyzoNtlZ2FT7KA2_xTv8',
          'Content-Type': 'application/json'
        }),
        mode:'no-cors'
      }).then(res=>{
        return res.json()
      }).then(res=>{
        console.log(res)
      },err=>{
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  render(){
    return (
      <Layout className="layout">
      <Header>
        <div className="logo">APEX战绩查询</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">玩家排行榜</Menu.Item>
          <Menu.Item key="2">英雄</Menu.Item>
          <Menu.Item key="3">武器</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        apex-stat ©2018 Created by React
      </Footer>
    </Layout>
    )
  }
}