import { Col, Input, Row } from 'antd';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useRegisterMutation } from '../generated/graphql';
// import leftImg from '../images/register.png'
function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [rePass, setRepass] = useState('');
    // eslint-disable-next-line
    const [register, _] = useRegisterMutation();
    const navigate = useNavigate();
    const onSubmit = async (event) => {
         event.preventDefault();
        if(name ==="" || rePass !==password){
            return;
        }
        await register({
            variables: {
                registerInput: {
                    name,
                    username,
                    password,
                },
            },
        });
        navigate('..');
    };
    
    // return (
    //     <form style={{ marginTop: '5px' }} onSubmit={onSubmit}>
    //         <input placeholder="name" onChange={(e) => setName(e.target.value)} type="text" value={name} />
    //         <input placeholder="username" onChange={(e) => setUsername(e.target.value)} type="text" value={username} />
    //         <input
    //             placeholder="password"
    //             onChange={(e) => setPassword(e.target.value)}
    //             type="password"
    //             value={password}
    //         />
    //         <button type="submit">Register</button>
    //     </form>
    // );
    return(
    <div className="bao_login" style={{height:'100vh',position:'absolute',width:"100%",backgroundImage:`url("https://giaiphapzalo.com/wp-content/uploads/2021/09/pagebg-1-1920x705.jpg")`}}>
      
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <Row style={{ width: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
          {/* <Col span={10}>
              <img style={{width:'100%',height:'100%'}} src={leftImg} alt="" />
          </Col> */}
          <Col span={24} style={{padding:'20px',backgroundColor:'white'}}>
            <h1 style={{color:'#1E90FF'}}>????ng k??</h1>
            <form style={{ marginTop: "5px" }} onSubmit={onSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ textAlign: 'left', fontWeight: 'bolder' }}>T??n ng?????i d??ng</label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={name}
                  placeholder="Nh???p t??n ng?????i d??ng"
                />
                <div style={{height:'20px',width:'100%',display:'flex',alignItems:'flex-start'}}>
                    <span style={{color:'red',textAlign:'left'}}>{name!=="" ? "" : "* T??n kh??ng ???????c tr???ng"}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '15px' }}>
                <label style={{ textAlign: 'left', fontWeight: 'bolder' }}>T??i kho???n</label>
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  value={username}
                  placeholder="Nh???p t??n t??i kho???n"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '15px' }}>
                <label style={{ textAlign: 'left', fontWeight: 'bolder' }}>M???t kh???u</label>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  placeholder="Nh???p m???t kh???u"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}>
                <label style={{ textAlign: 'left', fontWeight: 'bolder' }}>Nh???p l???i m???t kh???u</label>
                <Input
                  onChange={(e) => setRepass(e.target.value)}
                  type="password"
                  value={rePass}
                  placeholder="Nh???p m???t kh???u"
                />
                <div style={{height:'20px',width:'100%',display:'flex',alignItems:'flex-start'}}>
                    <span id='erroRepass' style={{color:'red',textAlign:'left'}}>
                        {rePass===password ? "" : "* sai m???t kh???u"}
                    </span>
                </div>
                
              </div>
              <div style={{ paddingBottom: '15px' }}>
                <button style={{ width: '100%', height: '40px', cursor: 'pointer', backgroundColor: '#1E90FF', color: "white", border: 'none' }} type="submit">????ng k??</button>

              </div>
              <div>
                <a href="">Qu??n m???t kh???u</a>
                <br />
                <a href="/login">????ng nh???p</a>
              </div>

            </form>
          </Col>

        </Row>

      </div>
    </div>
    )
}

export default Register;
