import React from 'react';
import './App.css';
import Body from "./components/Body.jsx";
import TitleText from "./components/TitleText.jsx";
import TextInput from "./components/TextInput.jsx";
import Footer from "./components/Footer.jsx";
import {Row, Col} from 'antd';
import Rectangle from "./components/Rectangle.jsx";
import Rectangle2 from "./components/Rectangle2.jsx";
import Rectangle3 from "./components/Rectangle3.jsx";




const App = () => (

  <div className="App">
    <Body />
    <TitleText />
    <TextInput />

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


  </div>
);


export default App;