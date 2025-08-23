import { useEffect, useState } from 'react';

const MatrixBackground = () => {
  const [matrixChars, setMatrixChars] = useState<Array<{
    id: number;
    char: string;
    left: number;
    animationDelay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const chars = '01デジタルコードプログラミング開発DEVCANS<>{}[];./?';
    const generateChars = () => {
      const newChars = [];
      const numChars = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < numChars; i++) {
        newChars.push({
          id: i,
          char: chars[Math.floor(Math.random() * chars.length)],
          left: Math.random() * 100,
          animationDelay: Math.random() * 3,
          duration: 3 + Math.random() * 2
        });
      }
      setMatrixChars(newChars);
    };

    generateChars();
    const interval = setInterval(generateChars, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix-bg">
      {matrixChars.map((char) => (
        <div
          key={char.id}
          className="matrix-char"
          style={{
            left: `${char.left}%`,
            animationDelay: `${char.animationDelay}s`,
            animationDuration: `${char.duration}s`
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  );
};

export default MatrixBackground;