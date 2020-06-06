import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import '@utils/sendEvent.js';
import './base.css'


/**
 * qiankun life circle
 */
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}
  
export async function mount(props) {
  console.log('[react16] props from main framework', props);
  ReactDOM.render( <App />, document.getElementById('root') );
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
