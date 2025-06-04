// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './global.css';          // <-- import global styles here
// import 'antd/dist/reset.css';

// import { ConfigProvider, theme } from 'antd';

// function Root() {
//   const [darkMode, setDarkMode] = React.useState(false);

//   return (
//     <ConfigProvider
//       theme={{
//         algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
//       }}
//     >
//       <App darkMode={darkMode} setDarkMode={setDarkMode} />
//     </ConfigProvider>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import 'antd/dist/reset.css';

import { ConfigProvider, theme } from 'antd';

function Root() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <App darkMode={darkMode} setDarkMode={setDarkMode} />
    </ConfigProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
