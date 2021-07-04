import './home.scss';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

export const Home = props => {
  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        <h2>Welcome, sharable component lib!</h2>
      </Col>
    </Row>
  );
};

export default Home;
