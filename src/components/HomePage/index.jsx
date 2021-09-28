import React, { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';

import './homepage.scss';
import {
  Typography,
  Spin,
  Row,
  Col,
  Avatar,
  Badge,
  Form,
  Input,
  Button,
  Dropdown,
  Menu,
  Card,
  Image,
  Pagination,
} from 'antd';
import {
  SearchOutlined,
  BellOutlined,
  DownOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { DeletePost, fetchPosts } from '../../store/actions/UserActions';

const LeftNav = {
  xs: 6,
  md: 5,
  xl: 5,
};

const menu = (
  <Menu>
    <Menu.Item>
      <Link to='/ChangePassword'>Change Password</Link>
    </Menu.Item>
    <Menu.Divider />

    <Menu.Item>
      <Link to='/logout'>Log Out </Link>
    </Menu.Item>
  </Menu>
);

const HomePage = (props) => {
  const { history, match } = props;

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    UserReducer: { ListPosts },
    Authentication: { logged, msg },
  } = useSelector((state) => state);

  const handleDeletePost = (e) => {
    dispatch(DeletePost(e.target.name, currentPage));
  };

  const handleEditPost = async (e) => {
    history.replace(`/EditPost/post?id=${e.target.name}`);
  };

  useEffect(() => {
    function checkLogged() {
      try {
        if (!logged) history.replace('/');
        dispatch(fetchPosts(currentPage));
      } catch (error) {}
    }
    checkLogged();
  }, [dispatch, history, logged, currentPage]);

  return (
    <div className='HomePage' style={{ width: 1200, margin: '0 auto' }}>
      <Row
        justify='space-between'
        style={{ alignItems: 'baseline', paddingTop: 25 }}
      >
        <Col span={6}>
          <h2 style={{ fontSize: 45 }}>BEBLOG</h2>
        </Col>
        <Col span={10}>
          <Form>
            <Row>
              <Col span={20}>
                <Form.Item>
                  <Input placeholder='Search here ... ' />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item>
                  <Button type='primary'>
                    <SearchOutlined />
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col offset={1} span={5}>
          <Row justify='space-between' align='middle'>
            <Col className='Avatar' {...LeftNav} style={{ overflow: 'hidden' }}>
              <Row>
                <Badge>
                  <div style={{ cursor: 'pointer' }}>
                    <Avatar size={45}>
                      <img src='' alt='avatar' />
                    </Avatar>
                  </div>
                </Badge>
              </Row>
            </Col>

            <Col className='Notification' {...LeftNav}>
              <div style={{ display: 'inline-block', cursor: 'pointer' }}>
                <Badge size='small' count={1} offset={[5, 0]}>
                  <BellOutlined style={{ fontSize: 20 }} />
                </Badge>
              </div>
            </Col>
            <Col className='Notification' {...LeftNav}>
              <div style={{ display: 'inline-block', cursor: 'pointer' }}>
                <Link to='/CreatePost'>
                  <PlusCircleOutlined style={{ fontSize: 20 }} />
                </Link>
              </div>
            </Col>

            <Col className='Select' {...LeftNav}>
              <Dropdown
                overlay={menu}
                overlayClassName='DropDown_Item'
                trigger={['click']}
                placement='topCenter'
              >
                <div>
                  <DownOutlined style={{ fontSize: 15, cursor: 'pointer' }} />
                </div>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={20} style={{ paddingTop: 20 }}>
        {ListPosts?.items ? (
          ListPosts.items.map((post) => (
            <Col
              span={6}
              key={post._id}
              style={{ cursor: 'pointer', paddingBottom: 20 }}
              className='PostCard'
            >
              <Card
                hoverable={true}
                bodyStyle={{ height: 520, position: 'relative' }}
              >
                {post?.author === (msg?._id || msg?.user_info?._id) ? (
                  <React.Fragment>
                    <div
                      className='UserAction'
                      style={{ position: 'absolute', zIndex: 999, right: 24 }}
                    >
                      <button
                        className='ant-btn ant-btn-danger delete'
                        type='danger'
                        onClick={handleDeletePost}
                        name={post._id}
                      >
                        Delete
                      </button>

                      <button
                        className='ant-btn ant-btn-primary edit'
                        name={post._id}
                        onClick={handleEditPost}
                      >
                        Edit
                      </button>
                    </div>
                    <div
                      className='YourPost'
                      style={{
                        position: 'absolute',
                        zIndex: 999,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <button className='ant-btn'>Your Post</button>
                    </div>
                  </React.Fragment>
                ) : null}
                <Link to={`/post/${post._id}`}>
                  <div>
                    <Image
                      width={'100%'}
                      height={200}
                      src='error'
                      fallback='data:image/png;base64,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'
                    />
                  </div>

                  <Typography.Title level={4}>{post.title}</Typography.Title>

                  <Typography.Paragraph ellipsis={{ rows: 5 }}>
                    {post.content} Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Voluptatum cumque mollitia delectus
                    expedita ducimus voluptate odit repudiandae eveniet officia,
                    incidunt aut quasi non totam repellat dolor laboriosam
                    quibusdam excepturi eum.
                  </Typography.Paragraph>
                  <Row justify='end' style={{ paddingTop: 10 }}>
                    <Typography.Text type='secondary'>
                      {post.author}
                    </Typography.Text>
                  </Row>
                </Link>
              </Card>
            </Col>
          ))
        ) : (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              height: '50vh',
            }}
          >
            <Spin size='large' />
          </div>
        )}
      </Row>

      <Pagination
        responsive={true}
        defaultCurrent={1}
        pageSize={8}
        total={ListPosts?.total_items || 0}
        onChange={(current) => {
          setCurrentPage(current);
          history.push(`/HomePage/post?page=${current}`);
        }}
      />
    </div>
  );
};

export default HomePage;
