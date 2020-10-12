import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.scss';

export default class TopBar extends React.Component {
  componentDidMount() {
    // todo
  }

  render() {
    return (
      <div className="top-bar">
        <div className="title-wrap">Slogan</div>
        <div className="page-link-wrap">
          <Link to="/">新品</Link>
          <Link to="/">应用商店</Link>
          <Link to="/">论坛</Link>
          <Link to="/">开发者社区</Link>
        </div>
      </div>
    );
  }
}
