
import { Row, Col, Checkbox } from 'antd';
import { Avatar, Button, Modal, Input } from 'antd';
import { Route, Routes } from 'react-router-dom';
import {
  UserOutlined, UsergroupAddOutlined, SplitCellsOutlined, EditOutlined, VideoCameraOutlined, SearchOutlined
} from "@ant-design/icons";
import '../ChatWindow/index.css'

import Messagee from '../Message/Message';
import ChatWindowBot from './ChatWinDowBot';
// import ChatWindowTop from './ChatWindowTop';
import '../ChatWindow/index.css'
import { useState } from 'react';
// import { useMessageContext } from '../../contexts/MessageContext';
// import { useGetConversationByIdQuery, useGetMyFriendByConversationIdQuery, useGetUserQuery } from '../../generated/graphql';





const ChatWindow = () => {


  const [widthWindowChat, setWidthWindowChat] = useState('100%')
  const [widthInfoWindowChat, setWidthInfoWindowChat] = useState('0%')
  const [displayInfo, setDisplayInfo] = useState('none');
  const [displayIconInfo, setDisplayIconInfo] = useState('block');
  const [displayIconInfoExit, setDisplayIconInfoExit] = useState('none');
  ////
  const [isModalReNameOpen, setIsModalReNameOpen] = useState(false);
  const [isModalAddMember, setIsModalAddMember] = useState(false);

  const CheckboxGroup = Checkbox.Group;
  const listFriend = [
    'aaa', 'bbb', 'ccc'
  ];
  const defaultCheckedList = [''];

  //rename modal
  const showModalReName = () => {
    setIsModalReNameOpen(true);
  };

  const handleOkModalReName = () => {
    setIsModalReNameOpen(false);
  };

  const handleCancelModalReName = () => {
    setIsModalReNameOpen(false);
  };
  // add member modal
  const showModalAddMember = () => {
    setIsModalAddMember(true);
  };

  const handleOkModalAddMember = () => {
    setIsModalAddMember(false);
  };

  const handleCancelModalAddMember = () => {
    setIsModalAddMember(false);
  };
  // checkbox add member
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const onChange = (list) => {
    setCheckedList(list);
  };

  //end checkbox
  //
  const handleClickShowInfoWindow = () => {
    setWidthWindowChat('70%');
    setWidthInfoWindowChat('30%');
    setDisplayInfo('block')
    setDisplayIconInfo('none');
    setDisplayIconInfoExit('block')
  }

  const handleClickExitInfoWindow = () => {
    setWidthWindowChat('100%');
    setWidthInfoWindowChat('0%');
    setDisplayInfo('none')
    setDisplayIconInfoExit('none');
    setDisplayIconInfo('block');
  }
 
  const [paddingTopWindowChat, setPaddingTopWindowChat] = useState("5px");

  
  return (
    // <Router>


    <Routes>
      {/* <Route
        path="/"
        element={
          <div className="chatContainer">

            heloo
          </div>
        }
      /> */}
      <Route path="/"
        element={
          <div style={{ height: '100vh', display: 'flex' }}>

            <Row style={{ height: '100%', width: widthWindowChat }}>
              <Col style={{ height: '10%', border: '2px solid #F5F5F5' }} span={24}>
                <div className='chat-window-top__bao'>
                  <div style={{ padding: `${paddingTopWindowChat} 15px 15px 15px` }}>
                    <Row style={{ display: 'flex' }} align='middle'>
                      <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} span={2}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Avatar.Group maxCount={2} size='small'> 
                           
                                  <Avatar size={50} s>
                                   AVATA
                                  </Avatar>
                             
                          </Avatar.Group>
                        </div>
                        {/* <ShowAvatarMemberGroupChat/> */}

                      </Col>
                      <Col span={12}>
                        <div className='name-chat__bao' style={{ display: 'flex', alignItems: 'center' }}>
                          <div>
                            <h2 style={{ marginBottom: '0px', marginLeft: '10px', marginRight: '5px' }}>
                              {/* {data?.getConversationById.name ? data?.getConversationById.name : myFriendInConversation?.getMyFriendByConversationId.name} */}
                            Ten nhom chat

                            </h2>
                          </div>

                          <div style={{ paddingBottom: '20px' }}>
                            <Button onClick={showModalReName} className='btn-edit-name-chat'
                              style={{ borderWidth: '0px' }} size='small' icon={<EditOutlined />}
                            />
                            {/* MODAL ?????I T??N TIN NH???N */}
                            <Modal width={350} title="?????i t??n" open={isModalReNameOpen} onOk={handleOkModalReName} onCancel={handleCancelModalReName}>
                              <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar size={80}>aa</Avatar>
                              </div>
                              <p>B???n c?? ch???c mu???n thay ?????i t??n cu???c tr?? chuy???n, khi x??c nh???n t??n m???i s??? ???????c c???p nh???t</p>
                              <Input />
                            </Modal>
                            {/* END MODAL */}
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                          <UserOutlined />
                          <a>member</a>
                        </div>
                        {/* <CountMemberInGroupChat /> */}
                      </Col>
                      <Col span={10}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <div style={{ paddingRight: '10px' }}>

                            <Button onClick={showModalAddMember} className='btn-tran' icon={<UsergroupAddOutlined />} />
                            {/* MODAL ADD FRIEND */}
                            <Modal title="Th??m th??nh vi??n" open={isModalAddMember} onOk={handleOkModalAddMember} onCancel={handleCancelModalAddMember}>
                              <Input prefix={<SearchOutlined />} placeholder="Nh???p t??n, s??? ??i???n tho???i, email" />
                              <div >
                                <h4>Tr?? chuy???n g???n ????y</h4>
                                <div>
                                  <CheckboxGroup style={{ display: 'flex', flexDirection: 'column' }}
                                    options={listFriend} value={checkedList} onChange={onChange} />
                                </div>
                              </div>
                            </Modal>
                            {/* END MODAL */}
                          </div>
                          <div style={{ paddingRight: '10px' }}>
                            <Button className='btn-tran' icon={<VideoCameraOutlined />} />
                          </div>
                          <div style={{ paddingRight: '10px' }}>
                            <Button style={{ display: displayIconInfo }} onClick={handleClickShowInfoWindow} className='btn-tran btn-infochat' icon={<SplitCellsOutlined />} />
                            <Button style={{ display: displayIconInfoExit }} onClick={handleClickExitInfoWindow} className='btn-tran btn-infochat' icon={<SplitCellsOutlined />} />

                          </div>

                        </div>

                      </Col>
                    </Row>
                  </div>


                </div>

              </Col>
              {/* //end top window chat */}
              <Col style={{ height: '75%', maxHeight: '75%', overflow: 'auto', backgroundColor: '#F8F8FF' }} span={24}>
                {/* CHAT CHAT CHAT */}
                {/* <Messagee msgId={id} /> */}
                {/* <Message own={false} />
              <Message own={true} />
              <Message own={false} />
              <Message own={true} /> */}
              <Messagee/>
              <Messagee/>
              <Messagee/>
              </Col>
              <Col style={{ height: '15%', border: '2px solid #F5F5F5' }} span={24}>
                <ChatWindowBot />
              </Col>
            </Row>

            {/* INFO CHATROM */}
            <Row style={{ width: widthInfoWindowChat, display: displayInfo }}>
              <div>
                <div style={{ height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #F5F5F5' }}>
                  <h3 style={{ textAlign: 'center', display: 'block', marginBottom: '0px' }}>Th??ng tin h???i tho???i</h3>
                </div>
                <div style={{ maxHeight: '90vh', overflow: 'auto' }}>
                  <div style={{ paddingBottom: '15px', border: '2px solid #F5F5F5' }}>
                    <div style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                      <Avatar size={60}>aaaaa</Avatar>
                    </div>
                    <div style={{ paddingBottom: '15px' }}>
                      <h4>Name</h4>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button icon={<VideoCameraOutlined />} />
                        <span style={{ inlineSize: '80px' }}>T???t th??ng b??o</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button icon={<VideoCameraOutlined />} />
                        <span style={{ inlineSize: '80px' }}>Ghim h???i tho???i</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button icon={<VideoCameraOutlined />} />
                        <span style={{ inlineSize: '80px' }}>T???o nh??m chat</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingLeft: '15px', paddingTop: '15px', marginBottom: '15px', border: '2px solid #F5F5F5' }}>
                    <h4 style={{ textAlign: 'left' }}>???nh/Video</h4>
                    <div>
                      <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Col style={{ height: '80px', padding: '5px' }} span={6}>
                          <img style={{ height: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvv9j9TIEgJWXIMVCGLnmOb_1XRU3WebpxQ&usqp=CAU" alt="" />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div style={{ paddingLeft: '15px', paddingTop: '15px', marginBottom: '15px', border: '2px solid #F5F5F5' }}>
                    <h4 style={{ textAlign: 'left' }}>File</h4>
                    <Row>
                      <Col span={24}>
                        <h3>file1</h3>
                      </Col>
                      <Col span={24}>
                        <h3>file2</h3>
                      </Col>
                    </Row>
                  </div>
                  <div style={{ paddingLeft: '15px', paddingTop: '15px', marginBottom: '15px', border: '2px solid #F5F5F5' }}>
                    <h4 style={{ textAlign: 'left' }}>Link</h4>
                    <Row>
                      <Col span={24}>
                        <h3>Link1</h3>
                      </Col>
                      <Col span={24}>
                        <h3>Link2</h3>
                      </Col>
                    </Row>
                  </div>
                  <div style={{ paddingLeft: '15px', paddingTop: '15px', marginBottom: '15px', border: '2px solid #F5F5F5' }}>
                    <h4 style={{ textAlign: 'left' }}>Thi???t l???p</h4>
                    <Row>
                      <Col span={24}>
                        <p>X??a l???ch s??? cu???c tr?? chuy???n</p>
                      </Col>

                    </Row>
                  </div>
                </div>

              </div>

            </Row>
          </div>
        } />
    </Routes>
    // </Router>

  );
}
export default ChatWindow