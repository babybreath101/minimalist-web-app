// import React from 'react';
// import './Content.css';
// import { Col, Row} from 'antd';
// import ContentGallery from './counterGallery';
// import Navbar from '../Menu/navbar'

// class myGallery extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       cardData:[
//         {
//           id: 1,
//           caption: "One Day",
//           date: "29 March 2020",
//           img: require('../Picture/kopi.jpg'),
//           link: 'https://www.instagram.com/annastsy_far/'
//         },
//         {
//           id: 2,
//           caption: "Catch Me If You Can",
//           date: "21 March 2020",
//           img: require('../Picture/buku.jpg'),
//           link: 'https://www.instagram.com/annastsy_far/'
//         },
//         {
//           id: 3,
//           caption: "Don't You Run",
//           date: "25 March 2020",
//           img: require('../Picture/radio.jpg'),
//           link: 'https://www.instagram.com/annastsy_far/'
//         }
//       ]
//     }
//   }
  
//   render(){
//     return (
//       <div>
//       {/* <Navbar/> */}
//       <div className="site-card-wrapper" style={{textAlign:"center"}}>
//         <Row gutter={[16,16]}>
//         {this.state.cardData.map((data,index)=>
//           <Col key={index}  xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//             <ContentGallery caption={data.caption} date={data.date} img={data.img} link={data.link} />
//           </Col>
//         )}
//         </Row>
//       </div>
//       </div>
//     );
//   }
// }
// {/* <Card extra={data.icon} title={data.nama} bordered={false} className="inside" >
//   <Tooltip title="Job">

//   </Tooltip>
// </Card> */}
// export default myGallery;
