import React from 'react';
import {
  Form,
  Row,
  Col,
  Typography,
  Card,
  Input,
  Button,
  notification,
} from 'antd';
import callAPI from '../../api/callAPI';
const InputEmail = (props) => {
  const { history } = props;
  const handleSubmit = async (vals) => {
    try {
      await callAPI('POST', 'v1/auth/forgot-password', vals);
      notification.open({
        message: <strong style={{ color: '#1FA463' }}>SUCCESS</strong>,
        description: 'Please check your email address',
        duration: 2,
        onClose: () => history.replace('/'),
      });
    } catch (error) {
      const { data } = error.response;
      const { msg, code } = data;
      notification.open({
        message: <strong style={{ color: 'red' }}>{code} error</strong>,
        description: msg,
      });
    }
  };
  return (
    <div className='InputEmail' style={{ height: '100vh' }}>
      <Row justify='center' align='middle' style={{ height: '70%' }}>
        <Col span={10}>
          <Card style={{ padding: '50px 45px 30px 45px' }}>
            <Typography.Title
              level={3}
              style={{ textAlign: 'center', paddingBottom: 20 }}
            >
              FORGOR YOUR PASSWORD
            </Typography.Title>
            <Form onFinish={handleSubmit}>
              <Form.Item
                name='email'
                colon={false}
                label={<strong style={{ fontSize: 18 }}>Email: </strong>}
                rules={[
                  { required: true, message: 'Please input email' },
                  {
                    type: 'email',
                    message: 'Invalid Email',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Row justify='center' style={{ paddingTop: 15 }}>
                  <Col>
                    <Button size='large' type='primary' htmlType='submit'>
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InputEmail;
