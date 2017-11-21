import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_news_block.js';
import PCNewsImageBlock from './pc_news_image_block.js';
import PCProduct from './pc_products.js';
import Img1 from './../img/carousel_1.jpg';
import Img2 from './../img/carousel_2.jpg';
import Img3 from './../img/carousel_3.jpg';
import Img4 from './../img/carousel_4.jpg';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel >
									<div><img src={Img1} alt='Img1'/></div>
								    <div><img src={Img2} alt='Img2'/></div>
								    <div><img src={Img3} alt='Img3'/></div>
								    <div><img src={Img4} alt='Img4'/></div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
						</div>
						<Tabs className="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>
						<Tabs className="tabs_product">
							<TabPane tab="ReactNews 产品" key="1">
								<PCProduct/>
							</TabPane>
						</Tabs>
						<div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
							<PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
