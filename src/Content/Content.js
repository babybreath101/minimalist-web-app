// import React from 'react';
// import './Content.css';
// import { Col, Row} from 'antd';
// import Counter from './Counter';
// import Navbar from '../Menu/navbar'

// class Content extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       cardData:[
//         {
//           id: 1,
//           caption: "One Day",
//           name: "Rachel Azzalea",
//           img: require('../Picture/kaki.jpg'),
//           ava: require('../Picture/profil1.jpg'),
//           link: 'https://www.instagram.com/annastsy_far/'
//         },
//         {
//           id: 2,
//           caption: "Hold My Hand",
//           name: "Annastasya Fitri A R",
//           img: require('../Picture/tangan.jpg'),
//           ava: require('../Picture/profil2.jpg'),
//           link: 'https://www.instagram.com/annastsy_far/'
//         },
//         {
//           id: 3,
//           caption: "Don't You Run",
//           name: "Baby Breath",
//           img: require('../Picture/kakii.jpg'),
//           ava: require('../Picture/profil3.jpg'),
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
//             <Counter caption={data.caption} name={data.name} img={data.img} ava={data.ava} link={data.link}/>
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
// export default Content;
