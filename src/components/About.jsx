// import React from 'react';
// import { Card, Typography, theme as antdTheme } from 'antd';
// import { motion } from 'framer-motion';

// const { Title, Paragraph } = Typography;

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// export default function About({ darkMode }) {
//   const { token } = antdTheme.useToken();

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       style={{ maxWidth: 720, margin: 'auto' }}
//     >
//       <Card
//         bordered={false}
//         hoverable
//         style={{
//           background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,0.04)',
//           backdropFilter: 'blur(12px)',
//           borderRadius: 16,
//           maxHeight: '575px',      // limit height
//           overflowY: 'auto',      // enable vertical scroll if needed
//           padding: 24,
//         }}
//       >
//         <Title style={{ color: token.colorPrimary, fontWeight: 600 }} level={3}>
//           About Me
//         </Title>
//         <Paragraph style={{ color: token.colorTextSecondary, fontSize: '1.1rem', lineHeight: 1.6 }}>
//             Meet Gojiya is a Solution Analyst on the Product Engineering and Development team, within the Engineering, AI, and Data offering at Deloitte Canada. Meet has the ability to link business with technology to extract insights from complex data and build data-driven solutions.
//         </Paragraph>
//         <Paragraph style={{ color: token.colorTextSecondary, fontSize: '1.1rem', lineHeight: 1.6 }}>
//             Meet is a graduate of the University of New Brunswick, where he earned a Master of Computer Science degree. He also holds a Bachelor’s degree in Computer Engineering from Gujarat Technological University. Meet is driven by technology innovation, advanced analytics, adaptability, collaboration, and creativity, ultimately furthering his career as well as those around him. He possesses a strong entrepreneurial spirit, which fuels his passion for creating impactful solutions and driving positive change within the industry and the world. 
//         </Paragraph>
//         <Paragraph style={{ color: token.colorTextSecondary, fontSize: '1.1rem', lineHeight: 1.6 }}>
//             An avid learner and active listener, Meet thrives on absorbing knowledge from as many people as possible, recognizing that every interaction is an opportunity to gain new insights and perspectives. His extremely curious personality propels him to explore new ideas, question existing paradigms, and continuously seek out opportunities for learning and growth.
//         </Paragraph>
//       </Card>
//     </motion.div>
//   );
// }

// import React from "react";
// import { Card, Typography, Avatar, Divider } from "antd";
// import { motion } from "framer-motion";

// const { Title, Paragraph } = Typography;

// export default function About() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       style={{ maxWidth: 700, margin: "auto" }}
//     >
//       <Card
//         bordered={false}
//         style={{
//           background: "rgba(255, 255, 255, 0.85)",
//           borderRadius: 16,
//           boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
//           padding: 24,
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
//           <Avatar
//             size={80}
//             src="https://avatars.githubusercontent.com/u/meetgojiya98" // Replace with your photo URL or local image path
//             alt="Meet Gojiya"
//             style={{ marginRight: 24, boxShadow: "0 0 10px rgba(0, 120, 255, 0.6)" }}
//           />
//           <Title level={2} style={{ color: "#0050b3", marginBottom: 0 }}>
//             About Me
//           </Title>
//         </div>

//         <Paragraph style={{ fontSize: 16, lineHeight: 1.6, color: "#333" }}>
//           Meet Gojiya is a Solution Analyst on the Product Engineering and Development team,
//           within the Engineering, AI, and Data offering at Deloitte Canada. Meet has the ability
//           to link business with technology to extract insights from complex data and build
//           data-driven solutions.
//         </Paragraph>

//         <Paragraph style={{ fontSize: 16, lineHeight: 1.6, color: "#333" }}>
//           Meet is a graduate of the University of New Brunswick, where he earned a Master of Computer
//           Science degree. He also holds a Bachelor's degree in Computer Engineering from Gujarat
//           Technological University. Meet is driven by technology innovation, advanced analytics,
//           adaptability, collaboration, and creativity, ultimately furthering his career as well as
//           those around him. He possesses a strong entrepreneurial spirit, which fuels his passion
//           for creating impactful solutions and driving positive change within the industry and the world.
//         </Paragraph>

//         <Paragraph style={{ fontSize: 16, lineHeight: 1.6, color: "#333" }}>
//           An avid learner and active listener, Meet thrives on absorbing knowledge from as many people
//           as possible, recognizing that every interaction is an opportunity to gain new insights and
//           perspectives. His extremely curious personality propels him to explore new ideas, question
//           existing paradigms, and continuously improve.
//         </Paragraph>

//         <Divider />

//         <Paragraph style={{ textAlign: "center", color: "#666" }}>
//           <em>"Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose." </em>
//         </Paragraph>
//       </Card>
//     </motion.div>
//   );
// }

// import React from "react";
// import { Card, Typography, Avatar, Divider } from "antd";
// import { motion } from "framer-motion";

// const { Title, Paragraph } = Typography;

// export default function About({ darkMode }) {
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
//           borderRadius: 16,
//           padding: "1.8rem 2rem",
//           background: darkMode
//             ? "rgba(30, 30, 30, 0.85)"
//             : "rgba(255, 255, 255, 0.9)",
//           backdropFilter: "blur(10px)",
//           boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//           color: darkMode ? "#eee" : "#222",
//           maxHeight: "75vh",
//           overflowY: "auto",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
//           <Avatar
//             size={80}
//             src="https://avatars.githubusercontent.com/u/meetgojiya98"
//             alt="Meet Gojiya"
//             style={{
//               marginRight: 20,
//               boxShadow: "0 0 12px rgba(41, 120, 240, 0.4)",
//               backgroundColor: "#2978F0",
//             }}
//           />
//           <Title
//             level={3}
//             style={{
//               color: darkMode ? "#90caff" : "#2978F0",
//               margin: 0,
//               fontWeight: 700,
//             }}
//           >
//             About Me
//           </Title>
//         </div>

//         <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
//           Meet Gojiya is a <strong>Solution Analyst</strong> on the Product Engineering and Development
//           team at Deloitte Canada. He bridges business with technology to extract insights from complex
//           data and build scalable, data-driven solutions.
//         </Paragraph>

//         <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
//           He holds a Master’s in Computer Science from the University of New Brunswick and a Bachelor's
//           in Computer Engineering from GTU. He is driven by innovation, analytics, adaptability, and
//           collaboration — and passionate about building impactful software that drives change.
//         </Paragraph>

//         <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
//           An avid learner and listener, Meet constantly explores new ideas, challenges norms, and strives
//           to grow personally and professionally through every interaction.
//         </Paragraph>

//         <Divider />

//         <Paragraph
//           style={{
//             textAlign: "center",
//             fontStyle: "italic",
//             color: darkMode ? "#aaa" : "#555",
//           }}
//         >
//           “Technology is best when it brings people together.”
//         </Paragraph>
//       </Card>
//     </motion.div>
//   );
// }


import React from "react";
import { Card, Typography, Avatar, Divider } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

export default function About({ darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        maxWidth: 700,
        margin: "0 auto",
        zIndex: 20,
      }}
    >
      <Card
        bordered={false}
        style={{
          borderRadius: 12,
          padding: "1.5rem 2rem",
          backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
          boxShadow: darkMode
            ? "0 4px 12px rgba(0,0,0,0.6)"
            : "0 4px 12px rgba(0,0,0,0.1)",
          color: darkMode ? "#f0f0f0" : "#222",
          maxHeight: "75vh",
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
          <Avatar
            size={72}
            src="https://raw.githubusercontent.com/meetgojiya98/My-Portfolio-Website/main/IMG_3914.jpg"
            alt="Meet Gojiya"
            style={{
              marginRight: 20,
              backgroundColor: "#2978F0",
              boxShadow: "0 0 10px rgba(41, 120, 240, 0.4)",
            }}
          />
          <Title
            level={3}
            style={{
              margin: 0,
              color: darkMode ? "#90caff" : "#2978F0",
              fontWeight: 600,
            }}
          >
            About Me
          </Title>
        </div>

        <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
          Meet Gojiya is a Solution Analyst on the Product Engineering and Development
          team at Deloitte Canada. He bridges business with technology to extract insights from complex
          data and build scalable, data-driven solutions.
        </Paragraph>

        <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
          He holds a Master’s in Computer Science from the University of New Brunswick and a Bachelor's
          in Computer Engineering from GTU. He is driven by innovation, analytics, adaptability, and
          collaboration — and passionate about building impactful software that drives change.
        </Paragraph>

        <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
          An avid learner and listener, Meet constantly explores new ideas, challenges norms, and strives
          to grow personally and professionally through every interaction.
        </Paragraph>

        <Divider />

        <Paragraph
          style={{
            textAlign: "center",
            fontStyle: "italic",
            color: darkMode ? "#aaa" : "#555",
          }}
        >
          “Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.”
          ― Steve Jobs
        </Paragraph>
      </Card>
    </motion.div>
  );
}
