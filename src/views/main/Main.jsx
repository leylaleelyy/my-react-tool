import React from 'react';
import TopBar from './top-bar/TopBar';
import Carousel from './carousel/Carousel';

export default class Main extends React.Component {
  componentDidMount() {
    // todo
  }

  render() {
    return [<TopBar />, <Carousel />];
  }
}
