import React from 'react';
import './App.css';
import Body from "./components/Body.jsx";
import TitleText from "./components/TitleText.jsx";
import TextInput from "./components/TextInput.jsx";
import Footer from "./components/Footer.jsx";
import SecondFooter from "./components/SecondFooter.jsx";

import {Row, Col} from 'antd';
import Rectangle from "./components/Rectangle.jsx";
import Rectangle2 from "./components/Rectangle2.jsx";
import Rectangle3 from "./components/Rectangle3.jsx";
import BlankRectangle from "./components/BlankRectangle.jsx";
import NewRectangle3 from "./components/NewRectangle3.jsx";



import MediaQuery from 'react-responsive'





const App = () => (

  <div className="App">
    <Body />
    <TitleText />
    <TextInput />

    <MediaQuery minWidth={1008}>
      <Row>

        <Col span={6} order={4}>
          <Rectangle3 />
        </Col>
        <Col span={6} order={3}>
          <Rectangle3 />
        </Col>
        <Col span={6} order={2}>
          <Rectangle2/>
        </Col>
        <Col span={6} order={1}>
          <Rectangle />
        </Col>
      </Row>  

      <Footer /> 

    </MediaQuery>


    <MediaQuery maxWidth={1007} minWidth={780}>
      <Row>
        <Col span={8} order={3}>
          <Rectangle3 />
        </Col>
        <Col span={8} order={2}>
          <Rectangle2/>
        </Col>
        <Col span={8} order={1}>
          <Rectangle />
        </Col>
      </Row>  

     <Row>
        <Col span={8} order={3}>
        <BlankRectangle/>
        </Col>
        <Col span={8} order={2}>
          <BlankRectangle/>
        </Col>
        <Col span={8} order={1}>
        <NewRectangle3/>
        </Col>
      </Row>  

      <SecondFooter />



    </MediaQuery>

    <MediaQuery maxWidth={779} minWidth={0}>
     <Row>

        <Col span={12} order={2}>
          <Rectangle2/>
        </Col>
        <Col span={12} order={1}>
          <Rectangle />
        </Col>
      </Row>  

      <Row>
        <Col span={12} order={2}>
          <NewRectangle3/>
        </Col>
        <Col span={12} order={1}>
          <NewRectangle3/>
        </Col>

      </Row>  

      <SecondFooter />

    </MediaQuery>
    


  </div>
);


export default App;