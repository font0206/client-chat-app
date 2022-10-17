
import { Avatar, Button, Popover } from 'antd';

import {
  DoubleRightOutlined, RetweetOutlined, EllipsisOutlined
} from "@ant-design/icons";
import '../Message/index.css'
import { useParams } from 'react-router-dom';
// import { Message, useGetMessagesQuery, useGetUserQuery } from '../../generated/graphql';
import JWTManager from '../../utils/jwt';
import { FC } from 'react';
import Moment from 'react-moment';






const Messagee = () => {
  // let { id } = useParams();
  // const userId = JWTManager.getUserId();

  // if (userId === null) {
  //   throw new Error('login');
  // }
  // const { loading, error, data } = useGetMessagesQuery({
  //   fetchPolicy: 'no-cache',
  //   variables: {
  //     getMessagesConversationId2: id as string,
  //   },
  // });

  // const GetName: FC<UserProps> = ({ senderId }) => {

  //   const { loading, data: dataUser } = useGetUserQuery({
  //     variables: {
  //       userId: senderId
  //     }
  //   })
  //   if (loading) return (<h5 style={{ textAlign: 'left' }} ></h5>)
  //   return (<h5 style={{ textAlign: 'left' }} >{dataUser?.getUser.name}</h5>)
  // }

  // const GetAvatarUserSender: FC<UserProps> = ({ senderId }) => {

  //   const { loading, data: dataUser } = useGetUserQuery({
  //     variables: {
  //       userId: senderId
  //     }
  //   })
  //   if (loading) return (<h5 style={{ textAlign: 'left' }} ></h5>)
  //   if (dataUser?.getUser.avatar) {

  //     return <Avatar size={35} src={dataUser?.getUser.avatar}></Avatar>
  //   }
  //   return (<Avatar size={35}>{dataUser?.getUser.name.slice(0, 1)}</Avatar>)
  // }



  // if (loading)
  //   return (
  //     <div className="chatContainer">
  //       <div className="messageContainer"></div>
  //       <div className="chatAction">
  //         <div className="actionContainer">
  //           <div>
  //             <input type="text" className="textInput" />
  //           </div>
  //           <div>
  //             <button className="sendBtn">Gửi</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // if (error) return <h1>{JSON.stringify(error)}</h1>;
  const rePlay = (
    <div>
      <p>Đánh dấu tin nhắn</p>
      <p>Lưu về máy</p>
      <p>Thu hồi</p>
      <p>Xóa chỉ ở phía tôi</p>
    </div>
  );
  return (
    <div>
      
        <div  className={ 'message__bao own' }>
          <div className={ 'avatar-chat-mine'} >
            <Avatar size={35} src={"https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"} />
            {/* <GetAvatarUserSender senderId={e.senderId} /> */}
           
          </div>
          <div className={'chat-bao chat-bao-mine'}>
            <div className={'chat-mine'} style={{ margin: '15px', paddingLeft: '15px', paddingTop: '10px', paddingRight: '10px' }}>
              {/* <p hidden className="messageText">Lorem ipsum dolor,{msgId}</p> */}
              <h5 style={{textAlign:'left'}}> Name</h5>
              {/* <GetName senderId={e.senderId} /> */}
              {/* chattttt */}
              <p className='info-chat' style={{ textAlign: 'left' }}>
                   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              {/* .....end chat */}

              <p className={'time-chat-my'} style={{ fontSize: '10px' }}>
                <Moment format="hh:mm" >
                 
                </Moment>
                {/* &nbsp; ngày &nbsp; 
                <Moment format="DD-MM-yyyy" >
                 
                </Moment> */}
                <br />

              </p>

            </div>

            <div className={'rep-chat rep-chat-mine'}>

              <Popover placement="right" content={rePlay} trigger="click">
                <Button className='btn-tran' icon={<EllipsisOutlined />} />
              </Popover>

              <Button className='btn-tran' icon={<DoubleRightOutlined />} />
              <Button className='btn-tran' icon={<RetweetOutlined />} />
            </div>
          </div>

        </div>
    
    </div>
  );
};
export default Messagee;