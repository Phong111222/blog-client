import React from 'react';
import { Row, Col, Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { ChangePassword as ChangePass } from '../../store/actions/UserActions';
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

const ChangePassword = (props) => {
  const { history } = props;
  // const {
  //   Authentication: { logged },
  // } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onFinish = (vals) => {
    dispatch(ChangePass(vals, history));
  };

  return (
    <div className='Register' style={{ paddingTop: 125 }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>BEBLOG-CLIENT</h1>
        <h1 style={{ textAlign: 'center' }}>CHANGE-PASSWORD</h1>
      </div>
      <Row justify='center' style={{ paddingRight: 15 }}>
        <Col {...ResponsiveCol}>
          <Form {...formLayout} onFinish={onFinish}>
            <Form.Item
              name='password'
              label={<strong>Old Password </strong>}
              rules={[
                {
                  required: true,
                  message: 'Please input your password',
                },
                {
                  min: 6,
                  message: 'password must contain at least 6 characters',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name='new_password'
              label={<strong>New Password</strong>}
              rules={[
                {
                  required: true,
                  message: 'Please input your password again',
                },
                {
                  min: 6,
                  message: 'password must contain at least 6 characters',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name='new_password_confirm'
              label={<strong>Confirm Password</strong>}
              dependencies={['new_password']}
              rules={[
                {
                  required: true,
                  message: 'Please input your password again',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('new_password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      'The two passwords that you entered do not match!'
                    );
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

export default ChangePassword;
