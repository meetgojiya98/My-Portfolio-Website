import React from 'react';
import { Card, Typography, Button, theme as antdTheme, Space } from 'antd';
import { motion } from 'framer-motion';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function ModernProjectCard({ title, description, github, liveDemo, darkMode }) {
  const { token } = antdTheme.useToken();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      style={{
        backdropFilter: 'blur(8px)',
        background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,0.04)',
        borderRadius: 16,
        padding: 24,
        margin: '24px auto',
        maxWidth: 720,
        cursor: 'pointer',
        boxShadow: darkMode
          ? '0 4px 12px rgba(0,0,0,0.3)'
          : '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <Card bordered={false} style={{ background: 'transparent' }}>
        <Title level={3} style={{ color: token.colorPrimary, fontWeight: 600 }}>
          {title}
        </Title>
        <Paragraph style={{ color: token.colorTextSecondary, fontSize: '1.1rem', lineHeight: 1.6 }}>
          {description}
        </Paragraph>
        <Space>
          {liveDemo && (
            <Button
              type="primary"
              href={liveDemo}
              target="_blank"
              icon={<LinkOutlined />}
              style={{ fontWeight: 600 }}
            >
              Live Demo
            </Button>
          )}
          {github && (
            <Button
              href={github}
              target="_blank"
              icon={<GithubOutlined />}
              style={{ fontWeight: 600 }}
            >
              GitHub
            </Button>
          )}
        </Space>
      </Card>
    </motion.div>
  );
}
