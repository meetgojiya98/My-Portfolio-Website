import React from 'react';
import { Card, Typography, theme as antdTheme, Progress, Tooltip, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const { Title } = Typography;

const skills = [
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'React.js & Next.js', level: 85 },
  { name: 'Node.js & Express', level: 80 },
  { name: 'MongoDB & SQL', level: 75 },
  { name: 'Ant Design', level: 80 },
  { name: 'Python & FastAPI', level: 70 },
  { name: 'OpenAI & AI Integration', level: 65 },
  { name: 'Git & CI/CD', level: 85 },
  // Add more skills here if you want to test scrolling
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, ease: 'easeOut', duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills({ darkMode }) {
  const { token } = antdTheme.useToken();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ maxWidth: 720, margin: 'auto' }}
    >
      <Card
        bordered={false}
        hoverable
        style={{
          background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
          backdropFilter: 'blur(16px)',
          borderRadius: 20,
          padding: 40,
          maxHeight: '400px',      // <-- limit height for scrolling
          overflowY: 'auto',      // <-- enable vertical scroll if content too long
        }}
      >
        <Title level={2} style={{ color: token.colorPrimary, fontWeight: 700, marginBottom: 24 }}>
          Skills
        </Title>
        <Row gutter={[16, 24]}>
          {skills.map(({ name, level }) => (
            <Col xs={24} sm={12} md={8} key={name}>
              <motion.div variants={itemVariants}>
                <Tooltip title={`${level}% proficiency`} color={token.colorPrimary}>
                  <div style={{ marginBottom: 12 }}>
                    <Typography.Text
                      strong
                      style={{
                        color: token.colorTextSecondary,
                        display: 'block',
                        marginBottom: 6,
                      }}
                    >
                      {name}
                    </Typography.Text>
                    <Progress
                      percent={level}
                      showInfo={false}
                      strokeColor={darkMode ? token.colorPrimary : '#2978F0'}
                      trailColor={darkMode ? 'rgba(255,255,255,0.2)' : '#d6e4ff'}
                    />
                  </div>
                </Tooltip>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Card>
    </motion.div>
  );
}
