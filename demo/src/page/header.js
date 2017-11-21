import React, { Component } from 'react';
import { Menu, Icon, Form, Input, Button, Checkbox, Modal, Tabs} from 'antd';
import Img from './../img/logo.png';
import "../css/theader.css";
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const MenuItemGroup = Menu.ItemGroup;
export default class App extends Component{
  constructor() {
		super();
		this.state = {
			current: 'app',
		    loading: false,
		    visible: false
		};
	};
  	handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
	
  showModal(e)  {
    this.setState({
      visible: true,
      current: e.key,
    });
  };
  handleOk () {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    },5);
  };
  handleCancel (){
    this.setState({ visible: false });
  };
  callback(key) {
		if (key === 1) {
			this.setState({action: 'login'});
		} else if (key === 2) {
			this.setState({action: 'register'});
		}
	};

  render() {
  	const { visible, loading } = this.state;
    return (     
      <div className='nav'>
	    	<div className='nav-center'>
		      	<div>
		      		<div className='nav-1'>
		      			<a href="/">
		      				<img src={Img } alt='logo'/>
		      				<span>ReactNews</span>
		      			</a>
		      			
		      		</div>
		      		
		      		<div className='nav-2'>
						<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
					        <Menu.Item key="toutiao" >
					          <Icon type="appstore"  />头条 
					        </Menu.Item>
					        <Menu.Item key="shehui" >
					          <Icon type="appstore" />社会
					        </Menu.Item>
					        <Menu.Item key="guonei" >
					          <Icon type="appstore" />国内
					        </Menu.Item>   
					         <Menu.Item key="guoji" >
					          <Icon type="appstore" />国际
					        </Menu.Item>
					        <Menu.Item key="yule" >
					         <Icon type="appstore" />娱乐
					        </Menu.Item>
					        <Menu.Item key="tiyu" >
					          <Icon type="appstore" />体育			          
					        </Menu.Item>  
					         <Menu.Item key="keji" >
					          <Icon type="appstore" /> 科技
					        </Menu.Item>  
					         <Menu.Item key="shishang" >
					          <Icon type="appstore" />时尚
					        </Menu.Item>  

			      		</Menu>
		      		</div>
		      		<div className='nav-3'>
		      			
			      		{/*dengluzhuce*/}
							<div>
						        <Menu  selectedKeys={[this.state.current]} 	mode="horizontal"   type="primary" onClick={this.showModal} >
					        		<Menu.Item key="denglu" >
					          		<Icon type="appstore" />登录/注册
					        		</Menu.Item>
			      				</Menu>
						        <Modal
						          visible={visible}
						          title="用户中心"
						          onOk={this.handleOk}
						          onCancel={this.handleCancel}
						          footer={[
						            <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
						            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
						              关闭 
						            </Button>,
						          ]}
						        >
						         	<Tabs onChange={this.callback.bind(this)} type="card">
									    <TabPane tab="登录" key="1">										
										<Form layout='horizontal'>
										<FormItem label="账户">
										<Input placeholder="请输入您的账号" />
										</FormItem>
										<FormItem label="密码">
										<Input type="password" placeholder="请输入您的密码" />
										</FormItem>
										<Button type="primary" htmlType="submit">登录</Button>
									</Form>
								</TabPane>
									   
								    <TabPane tab="注册" key="2">
										<Form layout='horizontal'>
											<FormItem label="账户">
												<Input placeholder="请输入您的账号"/>
											</FormItem>
											<FormItem label="密码">
												<Input type="password" placeholder="请输入您的密码" />
											</FormItem>
											<FormItem label="确认密码">
												<Input type="password" placeholder="请再次输入您的密码" />
											</FormItem>
											<Button type="primary" htmlType="submit">注册</Button>
										</Form>
								    </TabPane>								   
								  </Tabs>
						        </Modal>
						      </div>

			      		{/*dengluzhuce*/}	
		      		</div>
		      	</div>	      	
	      </div>		      		 
      </div>
    );
  }
}
