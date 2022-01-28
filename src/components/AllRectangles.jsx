import React from 'react';
import Rectangle from "./components/Rectangle.jsx";
import {Row, Col} from 'antd';

function AllRectangles(){

    return(
        <Row>
        <Col span={6} order={4}>
          <Rectangle />
        </Col>
        <Col span={6} order={3}>
          <Rectangle />
        </Col>
        <Col span={6} order={2}>
          <Rectangle />
        </Col>
        <Col span={6} order={1}>
          <Rectangle />
        </Col>
      </Row>)
      
};

export default AllRectangles;