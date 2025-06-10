// import React, { useState } from 'react';
// import { Layout, Menu } from 'antd';
// import {
//   AppstoreOutlined,
//   UserOutlined,
//   SettingOutlined,
//   MailOutlined,
//   LinkedinOutlined,
// } from '@ant-design/icons';

// import Projects from './components/Projects';
// import About from './components/About';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import DarkModeToggle from './components/DarkModeToggle';

// const { Header, Content, Footer, Sider } = Layout;

// export default function App({ darkMode = false, setDarkMode }) {
//   const [collapsed, setCollapsed] = useState(false);
//   const [selectedKey, setSelectedKey] = useState('about');

//   const menuItems = [
//     { key: 'about', icon: <UserOutlined />, label: 'About' },
//     { key: 'projects', icon: <AppstoreOutlined />, label: 'Projects' },
//     { key: 'skills', icon: <SettingOutlined />, label: 'Skills' },
//     { key: 'contact', icon: <MailOutlined />, label: 'Contact' },
//   ];

//   const renderContent = () => {
//     switch (selectedKey) {
//       case 'about':
//         return <About darkMode={darkMode} />;
//       case 'projects':
//         return <Projects darkMode={darkMode} />;
//       case 'skills':
//         return <Skills darkMode={darkMode} />;
//       case 'contact':
//         return <Contact darkMode={darkMode} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       {/* Blurred blobs */}
//       <div className="bg-blob top-left"></div>
//       <div className="bg-blob bottom-right"></div>

//       <Layout style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
//         <Sider
//           collapsible
//           collapsed={collapsed}
//           onCollapse={setCollapsed}
//           theme="dark"
//           style={{ zIndex: 10 }}
//         >
//           <div
//             style={{
//               color: '#2978F0',
//               textAlign: 'center',
//               padding: '20px',
//               fontWeight: '700',
//               fontSize: '20px',
//               letterSpacing: '1.1px',
//               whiteSpace: 'nowrap',
//               overflow: 'hidden',
//               textOverflow: 'ellipsis',
//             }}
//             title="Meet Gojiya"
//           >
//             Meet Gojiya
//           </div>

//           <Menu
//             theme="dark"
//             selectedKeys={[selectedKey]}
//             mode="inline"
//             items={menuItems}
//             onClick={(e) => setSelectedKey(e.key)}
//             style={{ fontWeight: 600, fontSize: 16 }}
//           />

//           {/* LinkedIn Icon in Sidebar */}
//           <div
//             style={{
//               textAlign: 'center',
//               padding: collapsed ? '10px' : '12px',
//               fontSize: 22,
//               marginTop: '1rem',
//             }}
//           >
//             <a
//               href="https://www.linkedin.com/in/meet-gojiya/"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 color: '#0a66c2',
//                 transition: 'transform 0.2s ease-in-out',
//                 display: 'inline-block',
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//               title="LinkedIn"
//             >
//               <LinkedinOutlined />
//             </a>
//           </div>
//         </Sider>

//         <Layout style={{ zIndex: 10 }}>
//           <Header
//             style={{
//               background: darkMode ? '#121212' : '#fff',
//               padding: '0 24px',
//               display: 'flex',
//               justifyContent: 'flex-end',
//               alignItems: 'center',
//               boxShadow: darkMode
//                 ? '0 2px 8px rgba(0,0,0,0.7)'
//                 : '0 2px 8px rgba(0,0,0,0.1)',
//               zIndex: 10,
//             }}
//           >
//             <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
//           </Header>

//           <Content
//             style={{
//               margin: '24px 16px',
//               overflowY: 'auto',
//               position: 'relative',
//               zIndex: 10,
//             }}
//           >
//             {renderContent()}
//           </Content>

//           <Footer
//             style={{
//               textAlign: 'center',
//               color: '#666',
//               position: 'relative',
//               zIndex: 10,
//             }}
//           >
//             © {new Date().getFullYear()} Meet Gojiya. All rights reserved.
//           </Footer>
//         </Layout>
//       </Layout>

//       {/* Floating LinkedIn Icon on Mobile */}
//       <a
//         href="https://www.linkedin.com/in/meet-gojiya/"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           position: 'fixed',
//           bottom: '20px',
//           right: '20px',
//           fontSize: '24px',
//           color: '#0a66c2',
//           background: '#fff',
//           borderRadius: '50%',
//           padding: '10px',
//           boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
//           zIndex: 1000,
//           display: 'none',
//         }}
//         className="mobile-linkedin"
//       >
//         <LinkedinOutlined />
//       </a>
//     </>
//   );
// }

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";

import AuroraBackground from "./components/AuroraBackground";
import SocialFAB from "./components/SocialFAB";

import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";
import MorphingHero from "./components/MorphingHero";
import './styles/elevated-card.css';

const { Header, Content, Footer, Sider } = Layout;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.5 };

export default function App({ darkMode = false, setDarkMode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("about");

  const menuItems = [
    { key: "about", icon: <UserOutlined />, label: "About" },
    { key: "projects", icon: <AppstoreOutlined />, label: "Projects" },
    { key: "skills", icon: <SettingOutlined />, label: "Skills" },
    { key: "contact", icon: <MailOutlined />, label: "Contact" },
  ];

  const renderContent = () => {
    const components = {
      about: () => (
        <>
          <MorphingHero />
          <About darkMode={darkMode} />
        </>
      ),
      projects: () => <Projects darkMode={darkMode} />,
      skills: () => <Skills darkMode={darkMode} />,
      contact: () => <Contact darkMode={darkMode} />,
    };
    return components[selectedKey] ? components[selectedKey]() : null;
  };

  return (
    <>
      <AuroraBackground />

      <Layout style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          theme="dark"
          style={{ zIndex: 10 }}
        >
          <div
            style={{
              color: "#2978F0",
              textAlign: "center",
              padding: "20px",
              fontWeight: "700",
              fontSize: "20px",
              letterSpacing: "1.1px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title="Meet Gojiya"
          >
            Meet Gojiya
          </div>
          <Menu
            theme="dark"
            selectedKeys={[selectedKey]}
            mode="inline"
            items={menuItems}
            onClick={(e) => setSelectedKey(e.key)}
            style={{ fontWeight: 600, fontSize: 16 }}
          />
        </Sider>

        <Layout style={{ zIndex: 10 }}>
          <Header
            style={{
              background: darkMode ? "#121212" : "#fff",
              padding: "0 24px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              boxShadow: darkMode
                ? "0 2px 8px rgba(0,0,0,0.7)"
                : "0 2px 8px rgba(0,0,0,0.1)",
              zIndex: 10,
            }}
          >
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              overflowY: "auto",
              position: "relative",
              zIndex: 10,
            }}
          >
            <AnimatePresence exitBeforeEnter>{/* Animate page changes */}
              <motion.div
                key={selectedKey}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </Content>

          <Footer
            style={{
              textAlign: "center",
              color: "#666",
              position: "relative",
              zIndex: 10,
            }}
          >
            © {new Date().getFullYear()} Meet Gojiya. All rights reserved.
          </Footer>
        </Layout>
      </Layout>

      <SocialFAB />
    </>
  );
}
