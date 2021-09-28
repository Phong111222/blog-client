import React from 'react';
// import axios from 'axios';
import { Row, Col, Form, Button, Input } from 'antd';

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
      span: 6,
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

const UpdatePassword = (props) => {
  return (
    <div className='ResetPassword' style={{ paddingTop: 100 }}>
      <Row justify='center'>
        <Col
          {...ResponsiveCol}
          style={{
            padding: 15,
            boxShadow: '2px 3px 5px 4px #969393',
            borderRadius: 8,
            background: 'white',
          }}
        >
          <div>
            <h1 style={{ textAlign: 'center' }}>BEBLOG-CLIENT</h1>
            <h1 style={{ textAlign: 'center' }}>RESET-PASSWORD</h1>
          </div>
          <Form
            {...formLayout} //onFinish={async (vals) => await onFinish(vals)}
          >
            <Form.Item
              name='password'
              label={<strong>New Password </strong>}
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
                {
                  min: 6,
                  max: 50,
                  message: 'Contain Password need to be greater than 6 ',
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
                Change
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default UpdatePassword;
