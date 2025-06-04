import React, { useState } from "react";
import { Layout, Menu, Switch } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function Navbar({ darkMode, setDarkMode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={220}
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#001529" : "#fff",
        color: darkMode ? "#1890ff" : "#003a8c",
      }}
    >
      <div
        style={{
          height: 60,
          margin: 16,
          fontSize: 20,
          fontWeight: "bold",
          color: darkMode ? "#1890ff" : "#003a8c",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          paddingLeft: 12,
          paddingRight: 12,
          lineHeight: "60px",
          userSelect: "none",
          cursor: "default",
        }}
        title="Meet Gojiya"
      >
        Meet Gojiya
      </div>

      <Menu
        theme={darkMode ? "dark" : "light"}
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ borderRight: 0 }}
        items={[
          {
            key: "1",
            icon: <AppstoreOutlined />,
            label: "Projects",
          },
          {
            key: "2",
            icon: <UserOutlined />,
            label: "About",
          },
          {
            key: "3",
            icon: <SettingOutlined />,
            label: "Skills",
          },
          {
            key: "4",
            icon: <MailOutlined />,
            label: "Contact",
          },
        ]}
      />

      <div
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
    </Sider>
  );
}
