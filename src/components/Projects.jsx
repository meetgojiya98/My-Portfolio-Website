import React from 'react';
import ModernProjectCard from './ModernProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Stock Market Copilot',
    description:
      'End-to-end React and FastAPI app that delivers stock data, news, and AI insights for smarter investment decisions.',
    github: 'https://github.com/meetgojiya98/rag-stock-copilot',
    liveDemo: 'https://rag-stock-copilot.vercel.app/',
  },
  {
    title: 'Stock Sentiment Dashboard',
    description:
      'The app provides a real-time dashboard displaying stock market sentiment, trending stocks, latest news, and Reddit posts to help users track market mood and insights.',
    github: 'https://github.com/meetgojiya98/Stock-Sentiment-Dashboard',
    liveDemo: 'https://meetgojiya98.github.io/stock-sentiment-frontend/',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } },
};

export default function Projects({ darkMode }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {projects.map((project) => (
        <motion.div key={project.title} variants={itemVariants}>
          <ModernProjectCard darkMode={darkMode} {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
