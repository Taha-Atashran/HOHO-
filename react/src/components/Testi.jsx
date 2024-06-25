import { useEffect, useState } from 'react';

function App() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationDegree = scrollY % 360; // Adjust the rotation degree based on scroll position
      setRotation(rotationDegree);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/vision.png"
          alt="Rotating"
          style={{ transform: `rotate(${rotation}deg)` }}
          className="rotating-image"
        />
        <div style={{ height: '2000px' }}>Scroll down to see the image rotate</div>
      </header>
    </div>
  );
}

export default App;
