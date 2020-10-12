import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import App from './views/App';

const root = document.getElementById('root');

// 配置热更新
const render = (Component) => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./views/App', () => {
    // require会默认加载所有export内容，所以加default
    const NextApp = require('./views/App').default; // eslint-disable-line
    render(NextApp);
  });
}
