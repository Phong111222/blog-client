import React from 'react';
import { Card, Row, Col, Typography, Button } from 'antd';
import { useEffect } from 'react';

const ChangePasswordSuccess = (props) => {
  const { history } = props;

  useEffect(() => {
    localStorage.removeItem('token');
  });
  return (
    <div
      className='ChangePasswordSuccess'
      style={{
        height: '100vh',
      }}
    >
      <Typography.Title style={{ textAlign: 'center', paddingTop: 50 }}>
        BEBLOG
      </Typography.Title>
      <Row justify='center' align='middle' style={{ height: '50%' }}>
        <Col offset={[6, 6]} span={12}>
          <Card style={{ padding: '45px 0' }}>
            <Row>
              <Col span={24}>
                <Typography.Title
                  level={2}
                  style={{ textAlign: 'center', fontWeight: 'bold' }}
                >
                  SUCCESS
                </Typography.Title>
                <Typography.Paragraph
                  style={{ textAlign: 'center', fontWeight: 'bold' }}
                >
                  YOUR PASSWORD HAS BEEN CHANGED
                  <br />
                  PLEASE LOGIN AGAIN
                </Typography.Paragraph>
              </Col>
            </Row>
            <Row justify='center'>
              <Col>
                <Button
                  type='primary'
                  onClick={() => {
                    history.replace('/');
                  }}
                >
                  LOGIN
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ChangePasswordSuccess;
