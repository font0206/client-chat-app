
// import avatar from '../../images/img.png';
import { Row, Col } from 'antd'
import TopChatList from './TopChatList';
import MemberItem from './MemberItem';

import { Await, Link } from 'react-router-dom';
import conversationApi from '../../api/conversationApi';
import { useEffect, useState } from 'react';
import configAxios from '../../api/axiosClient';



export default function ChatList() {
  
  const [list, setList] = useState([])
  useEffect(() => {

    
      conversationApi.getList().then(res => {
        setList(res.data)
      });

  }, [])
  return (
    <Row >
      <Col style={{ border: '2px solid #F5F5F5' }} span={24}>
        <TopChatList />
      </Col>
      <Col className='chatlist__bao' style={{ border: '2px solid #F5F5F5', maxHeight: '87vh', overflow: 'auto' }} span={24}>
      
        {list.map(ele => (
          
          <Link to={'/chat-room/id'} key={ele._id}>
            <div className="member" >
            <MemberItem data={ele} />

            </div>

          </Link>
          
        ))}

        {/* ))} */}



      </Col>

    </Row>



  );
}