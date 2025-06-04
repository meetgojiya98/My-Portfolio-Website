import React, { useState } from 'react';
import { Card, Form, Input, Button, message, Typography, theme as antdTheme } from 'antd';
import { motion } from 'framer-motion';

const { Title } = Typography;

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact({ darkMode }) {
  const [loading, setLoading] = useState(false);
  const { token } = antdTheme.useToken();

  const onFinish = (values) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      message.success('Message sent! I will get back to you soon.');
    }, 1500);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ maxWidth: 600, margin: 'auto' }}
    >
      <Card
        style={{
          background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,0.04)',
          backdropFilter: 'blur(16px)',
          borderRadius: 20,
        }}
        bordered={false}
        hoverable
      >
        <Title style={{ color: token.colorPrimary, fontWeight: 600 }} level={3}>
          Contact Me
        </Title>
        <Form name="contact" layout="vertical" onFinish={onFinish} requiredMark={false}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Enter a valid email' },
            ]}
          >
            <Input placeholder="your.email@example.com" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please enter a message' }]}
          >
            <Input.TextArea rows={5} placeholder="Your message" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{ backgroundColor: token.colorPrimary, borderColor: token.colorPrimary }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = token.colorPrimaryHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = token.colorPrimary)}
            >
              Send Message
            </Button>
          </Form.Item>

          <Form.Item>
            <a href="/resume.pdf" download>
              <Button block>Download Resume</Button>
            </a>
          </Form.Item>
        </Form>
      </Card>
    </motion.div>
  );
}
