import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';

bridge.send('VKWebAppInit', {});

ReactDOM.render(<App/>, document.getElementById('root'));
