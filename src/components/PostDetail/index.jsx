import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Typography, Divider } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetail } from '../../store/actions/UserActions';

const PostDetail = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  const dispatch = useDispatch();
  const {
    UserReducer: { PostDetail },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPostDetail(id));
  }, [id, dispatch]);

  return (
    <div className='PostDetail' style={{ paddingTop: 80 }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>POST-DETAIL</h1>
      </div>

      {PostDetail ? (
        <Row justify='center' key={PostDetail?._id}>
          <Col span={12}>
            <Typography>
              <Typography.Title level={2}>{PostDetail?.title}</Typography.Title>
              <Typography.Paragraph>{PostDetail?.content}</Typography.Paragraph>
              <Divider />
              <Typography.Title level={5}>
                {PostDetail?.author?.name}
              </Typography.Title>
              <Link to='/HomePage'>HomePage</Link>
            </Typography>
          </Col>
        </Row>
      ) : null}
    </div>
  );
};

export default PostDetail;
