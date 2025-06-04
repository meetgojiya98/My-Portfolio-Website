// In your Sidebar (App.jsx or Layout component):

import { LinkedinOutlined } from '@ant-design/icons';

// Inside the <Sider> component, just below the Menu
<div style={{ textAlign: 'center', marginTop: 20 }}>
  <a
    href="https://www.linkedin.com/in/meet-gojiya/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ fontSize: 24, color: '#2978F0' }}
  >
    <LinkedinOutlined
      style={{
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    />
  </a>
</div>

// Optional: Floating LinkedIn icon for mobile (add near end of App.jsx or Layout):

import { useEffect, useState } from 'react';

function FloatingLinkedIn() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <a
      href="https://www.linkedin.com/in/meet-gojiya/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 100,
        fontSize: 28,
        background: '#2978F0',
        color: '#fff',
        borderRadius: '50%',
        padding: 10,
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <LinkedinOutlined />
    </a>
  );
}

// In App return layout (below <Footer />)
<FloatingLinkedIn />
