import React from 'react';
import { Row, Col, Button, Form, Input, Card } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect } from 'react';
import { UpdatePost } from '../../store/actions/UserActions';
import { useForm } from 'antd/lib/form/Form';
const ResponsiveCol = {
  xs: 10,
  sm: 10,
  md: 12,
  lg: 12,
};
const formLayout = {
  labelCol: {
    xs: {
      offset: 3,
      span: 18,
    },
  },
  wrapperCol: {
    xs: {
      offset: 3,
      span: 18,
    },
  },
};

const EditPost = (props) => {
  const [MyForm] = useForm();

  const { history, location } = props;
  const dispatch = useDispatch();
  const {
    Authentication: { msg },
    UserReducer: {
      ListPosts: { items },
    },
  } = useSelector((state) => state);

  const { id } = queryString.parse(location.search);

  const handleSubmit = (vals) => {
    dispatch(UpdatePost(id, history, vals));
  };
  useEffect(() => {
    const item = items.find((post) => post._id === id);
    MyForm.setFieldsValue({ title: item?.title, content: item?.content });
  }, [MyForm, id, items]);

  return (
    <div className='EditPost'>
      <Row justify='center' style={{ paddingTop: 30 }}>
        <Col {...ResponsiveCol} style={{ alignItems: 'center' }}>
          <Card>
            <div>
              <h1 style={{ textAlign: 'center' }}>BEBLOG-CLIENT</h1>
              <h1 style={{ textAlign: 'center' }}>EDIT-POST</h1>
            </div>
            <Form form={MyForm} {...formLayout} onFinish={handleSubmit}>
              <Form.Item
                label={<strong>Author</strong>}
                style={{ marginBottom: 0 }}
              >
                <Input
                  disabled={true}
                  defaultValue={msg?.user_info?.name || msg?.name}
                />
              </Form.Item>

              <Form.Item
                name='title'
                label={<strong>Title </strong>}
                rules={[
                  {
                    required: true,
                    message: 'Please input title',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='content'
                label={<strong>Content </strong>}
                rules={[
                  {
                    required: true,
                    message: 'Please input content',
                  },
                  {
                    min: 10,
                    message: 'Content must have at least 10 characters',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input.TextArea style={{ height: 250 }} />
              </Form.Item>
              {/* <Form.Item
                name='author'
                initialValue={msg?.user_info?._id || msg?._id}
                style={{ height: 0, marginBottom: 0 }}
              >
                <></>
              </Form.Item>*/}
              <Form.Item
                wrapperCol={{
                  offset: 3,
                }}
              >
                <Link to='/HomePage'>HomePage</Link>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 3,
                }}
                style={{ marginBottom: 0 }}
              >
                <Button
                  htmlType='submit'
                  type='primary'
                  style={{ marginTop: 10, marginBottom: 0 }}
                >
                  EDIT
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditPost;
