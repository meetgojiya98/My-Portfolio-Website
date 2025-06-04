import React from 'react';
import { Card, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

export default function AnimatedProjectCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgb(255 0 150 / 0.8)" }}
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(255, 255, 255, 0.07)',
        borderRadius: 24,
        padding: 24,
        margin: '24px auto',
        maxWidth: 700,
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <Card bordered={false} style={{ background: 'transparent' }}>
        <Title level={3} style={{ color: '#FF0096', fontWeight: 'bold' }}>
          {title}
        </Title>
        <Paragraph style={{ color: '#eee', fontSize: '1.1rem', lineHeight: 1.5 }}>
          {description}
        </Paragraph>
      </Card>
    </motion.div>
  );
}
