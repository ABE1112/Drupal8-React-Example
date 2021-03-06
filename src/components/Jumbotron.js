import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import computer from '../assets/computer.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${computer}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .text {
    text-align: center;
    padding-top: 100px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container className="text">
        <h1>Welcome</h1>
        <p>This is a Drupal 8 and React blog example</p>
      </Container>
    </Jumbo>
  </Styles>
)
