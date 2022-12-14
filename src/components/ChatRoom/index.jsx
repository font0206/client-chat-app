

import { Row, Col, Avatar } from 'antd'

import ChatList from '../ChatList/ChatList';
import ChatWindow from '../ChatWindow/ChatWindow';
import SlideMenuLeft from '../SildeMenuLeft/index';
import '../SildeMenuLeft/index.css'

import Login from '../Login';
import { useAuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';


export default function ChatRoom() {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate('/login')
    return <Login />
  }
  else
    return (
      

        // <div>
          
          <Row style={{ height: '100vh', width: '100%', position: 'absolute' }}>
          <Col style={{ height: '100%' }} span={1}> <SlideMenuLeft />

          </Col>
          <Col style={{ height: '100%' }} span={6} >
            <ChatList />
          </Col>
          <Col style={{ height: '100%' }} span={17}>
            <ChatWindow />
          </Col>

        </Row>
  
    );


}