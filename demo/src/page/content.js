import React, { Component } from 'react';
import "../css/content.css";
import "../css/pc.css";
import PCnewscontainer from './pc_newscontainer.js';
import { Carousel } from 'antd';
export default class App extends Component{
  render() {
    return (
    <div>
      <PCnewscontainer />
    </div>
     /*<div className='content'>
      	<div className='center'>
      		<div className='center-left'>
      			<div className='lunbo'>
      				
					  <Carousel autoplay>
					    <div><img src={Img1} alt='Img1'/></div>
					    <div><img src={Img2} alt='Img2'/></div>
					    <div><img src={Img3} alt='Img3'/></div>
					    <div><img src={Img4} alt='Img4'/></div>
					  </Carousel>
      			
      			</div>
            <PCnewscontainer />
      			<div className='news'>
      				  <Card title="国际头条"  style={{ width: 400 ,height:376 ,marginTop:10}}>
                  <div className='t1'>
                      <img src="" alt="" />
                      <p>杜特尔特：做事...</p>
                      <p>环球网</p>
                  </div>
                </Card>

      			</div>
      		</div>
      		<div className='center-right'></div>
      	</div>
      </div>*/
    );
  }
}
