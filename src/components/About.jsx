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
//       style={{
//         maxWidth: 700,
//         margin: "0 auto",
//         zIndex: 20,
//       }}
//     >
//       <Card
//         bordered={false}
//         style={{
//           borderRadius: 12,
//           padding: "1.5rem 2rem",
//           backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
//           boxShadow: darkMode
//             ? "0 4px 12px rgba(0,0,0,0.6)"
//             : "0 4px 12px rgba(0,0,0,0.1)",
//           color: darkMode ? "#f0f0f0" : "#222",
//           maxHeight: "75vh",
//           overflowY: "auto",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
//           <Avatar
//             size={72}
//             src="https://raw.githubusercontent.com/meetgojiya98/My-Portfolio-Website/main/IMG_3914.jpg"
//             alt="Meet Gojiya"
//             style={{
//               marginRight: 20,
//               backgroundColor: "#2978F0",
//               boxShadow: "0 0 10px rgba(41, 120, 240, 0.4)",
//             }}
//           />
//           <Title
//             level={3}
//             style={{
//               margin: 0,
//               color: darkMode ? "#90caff" : "#2978F0",
//               fontWeight: 600,
//             }}
//           >
//             About Me
//           </Title>
//         </div>

//         <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
//           Meet Gojiya is a Solution Analyst on the Product Engineering and Development
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
//           “Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.”
//           ― Steve Jobs
//         </Paragraph>
//       </Card>
//     </motion.div>
//   );
// }

import React from "react";
import { Card, Typography, Avatar, Divider } from "antd";
import { motion } from "framer-motion";
import "../styles/elevated-card.css";

const { Title, Paragraph } = Typography;

export default function About({ darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: 700, margin: "0 auto", zIndex: 20 }}
    >
      <Card
        bordered={false}
        className="elevated-card"
        style={{
          borderRadius: 12,
          padding: "1.5rem 2rem",
          backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
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
