import React, { useEffect } from 'react';
import { Row, Col, Form, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/AuthenActions';
import setAuth from '../../api/SetAuth';
const ColResponsive = {
  xs: 10,
  sm: 8,
  md: 14,
  lg: 8,
};

const FormLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    md: {
      span: 24,
    },
    lg: {
      span: 8,
    },
    xl: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    md: {
      span: 24,
    },
    lg: {
      span: 16,
    },
    xl: {
      span: 18,
    },
  },
};

const Login = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const OnFinish = ({ email, password }) => {
    dispatch(login(email, password, history));
  };

  useEffect(() => {
    const logged = localStorage.getItem('token') || false;

    if (logged) {
      setAuth(JSON.parse(localStorage.getItem('token')).accessToken);
      history.replace('/HomePage');
    }
  }, [history]);

  return (
    <div style={{ background: '#f2f2f2', height: '100vh' }}>
      <div className='Login' style={{ paddingTop: 150 }}>
        <Row justify='center'>
          <Col
            {...ColResponsive}
            style={{
              padding: 15,
              boxShadow: '2px 3px 5px 4px #969393',
              borderRadius: 8,
              background: 'white',
            }}
          >
            <h1 style={{ textAlign: 'center', marginBottom: 30 }}>
              BEBLOG-CLIENT
            </h1>
            <Form
              onFinish={({ email, password }) => OnFinish({ email, password })}
              {...FormLayout}
            >
              <Form.Item
                labelAlign='left'
                name='email'
                label={<strong>EMAIL </strong>}
                rules={[
                  {
                    required: true,
                    message: 'Please input your email',
                  },
                  {
                    type: 'email',
                    message: 'Invalid Email',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='password'
                label={<strong>PASSWORD </strong>}
                labelAlign='left'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password',
                  },
                  {
                    min: 6,
                    max: 50,
                    message: 'Contain Password need to be greater than 6 ',
                  },
                ]}
              >
                <Input.Password visibilityToggle={false} />
              </Form.Item>
              <Form.Item>
                <Row>
                  <Col span={12}>
                    <Link to='/register'>
                      <Button type='link' htmlType='button'>
                        Sign up
                      </Button>
                    </Link>
                  </Col>
                  <Col span={12}>
                    <Link to='/ForgotPassword'>
                      <Button type='link' htmlType='button'>
                        Forgot your password ?
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
