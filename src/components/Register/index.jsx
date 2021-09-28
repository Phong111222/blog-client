import React from 'react';
import { Row, Col, Button, Form, Input, Card } from 'antd';

import { useDispatch } from 'react-redux';
import register from '../../store/actions/RegisterActions';
const ResponsiveCol = {
  xs: 10,
  sm: 10,
  md: 12,
  lg: 12,
};
const formLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
    md: {
      span: 9,
    },
    lg: {
      span: 8,
    },
  },
  wrapperCol: {
    lg: {
      span: 10,
    },
  },
};

const Register = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  // const POST = async (req_values) => {
  //   try {
  //     const {
  //       data: { code, msg },
  //     } = await axios({
  //       method: 'POST',
  //       baseURL: API,
  //       url: '/v1/auth/register',
  //       data: { ...req_values },
  //     });
  //     notification.open({
  //       duration: 2,
  //       message: code,
  //       description: <strong style={{ color: '#1FA463' }}>{msg}</strong>,
  //       onClose: () => history.replace('/'),
  //     });
  //   } catch (error) {
  //     const {
  //       data: { msg, code },
  //     } = error.response;
  //     notification.open({
  //       duration: 4,
  //       message: <strong style={{ color: 'red' }}>{code} error</strong>,
  //       description: `Registered ${msg}`,
  //     });
  //   }
  // };

  const onFinish = (vals) => {
    dispatch(register(vals, history));
  };
  return (
    <div className='Register' style={{ paddingTop: 125 }}>
      <Row justify='center' style={{ paddingRight: 15 }}>
        <Col {...ResponsiveCol}>
          <Card
            bodyStyle={{
              borderColor: 'transparent',
              boxShadow:
                '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
            }}
          >
            <div>
              <h1 style={{ textAlign: 'center' }}>BEBLOG-CLIENT</h1>
              <h1 style={{ textAlign: 'center' }}>BEBLOG-REGISTER</h1>
            </div>
            <Form
              {...formLayout}
              onFinish={async (vals) => await onFinish(vals)}
            >
              <Form.Item
                name='name'
                label={<strong>UserName</strong>}
                rules={[
                  {
                    required: true,
                    message: 'Please input your username',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='email'
                label={<strong>Email </strong>}
                rules={[
                  {
                    type: 'email',
                    message: 'Invalid Email',
                  },
                  {
                    required: true,
                    message: 'Please input your Email',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='password'
                label={<strong>Password </strong>}
                rules={[
                  {
                    required: true,
                    message: 'Please input your password',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name='password_confirm'
                label={<strong>Confirm Password</strong>}
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: 'Please input your password again',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('The two passwords do not match');
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  xs: {
                    offset: 0,
                  },
                  md: {
                    offset: 9,
                  },
                  lg: {
                    offset: 8,
                  },
                }}
              >
                <Button
                  htmlType='submit'
                  type='primary'
                  style={{ marginTop: 10 }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
