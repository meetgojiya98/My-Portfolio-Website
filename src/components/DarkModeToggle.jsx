import React from 'react';
import { Switch } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <Switch
      checked={darkMode}
      onChange={setDarkMode}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
      style={{
        backgroundColor: darkMode ? '#2978F0' : '#ccc',
        borderColor: darkMode ? '#2978F0' : '#ccc',
        boxShadow: darkMode ? '0 0 8px #2978F0' : 'none',
        transition: 'all 0.3s ease',
      }}
    />
  );
}
