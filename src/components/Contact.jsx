// import React from 'react';
// import { Card, Typography, Form, Input, Button, Space, message } from 'antd';
// import { motion } from 'framer-motion';
// import { DownloadOutlined } from '@ant-design/icons';

// const { Title } = Typography;

// export default function Contact({ darkMode }) {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const data = new FormData(form);

//     const response = await fetch('https://formspree.io/f/xgvyvvdw', {
//       method: 'POST',
//       body: data,
//       headers: {
//         Accept: 'application/json',
//       },
//     });

//     if (response.ok) {
//       message.success('Message sent successfully!');
//       form.reset();
//     } else {
//       message.error('Failed to send message. Please try again.');
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ maxWidth: 700, margin: "0 auto", zIndex: 20 }}
//     >
//       <Card
//         bordered={false}
//         style={{
//           borderRadius: 12,
//           padding: "2rem",
//           backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
//           boxShadow: darkMode
//             ? "0 4px 12px rgba(0,0,0,0.6)"
//             : "0 4px 12px rgba(0,0,0,0.1)",
//           color: darkMode ? "#f0f0f0" : "#222",
//           maxHeight: "75vh",
//           overflowY: "auto",
//         }}
//       >
//         <Title level={3} style={{ color: darkMode ? "#90caff" : "#2978F0" }}>
//           Contact Me
//         </Title>

//         <form onSubmit={handleSubmit}>
//           <Form layout="vertical">
//             <Form.Item label="Name" name="name" required>
//               <Input name="name" />
//             </Form.Item>

//             <Form.Item label="Email" name="email" required>
//               <Input type="email" name="email" />
//             </Form.Item>

//             <Form.Item label="Message" name="message" required>
//               <Input.TextArea name="message" rows={4} />
//             </Form.Item>

//             <Form.Item>
//               <Space>
//                 <Button type="primary" htmlType="submit">
//                   Send Message
//                 </Button>

//                 <Button
//                   icon={<DownloadOutlined />}
//                   href="/resume.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Download Resume
//                 </Button>
//               </Space>
//             </Form.Item>
//           </Form>
//         </form>
//       </Card>
//     </motion.div>
//   );
// }


import React from "react";
import { Card, Typography, Form, Input, Button, Space, message } from "antd";
import { motion } from "framer-motion";
import { DownloadOutlined } from "@ant-design/icons";
import "../styles/elevated-card.css";

const { Title } = Typography;

export default function Contact({ darkMode }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xgvyvvdw", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      message.success("Message sent successfully!");
      form.reset();
    } else {
      message.error("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: 700, margin: "0 auto", zIndex: 20 }}
    >
      <Card
        className="elevated-card"
        bordered={false}
        style={{
          borderRadius: 12,
          padding: "2rem",
          backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
          color: darkMode ? "#f0f0f0" : "#222",
          maxHeight: "75vh",
          overflowY: "auto",
        }}
      >
        <Title level={3} style={{ color: darkMode ? "#90caff" : "#2978F0" }}>
          Contact Me
        </Title>

        <form onSubmit={handleSubmit}>
          <Form layout="vertical">
            <Form.Item label="Name" name="name" required>
              <Input name="name" />
            </Form.Item>

            <Form.Item label="Email" name="email" required>
              <Input type="email" name="email" />
            </Form.Item>

            <Form.Item label="Message" name="message" required>
              <Input.TextArea name="message" rows={4} />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Send Message
                </Button>

                <Button
                  icon={<DownloadOutlined />}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </form>
      </Card>
    </motion.div>
  );
}
