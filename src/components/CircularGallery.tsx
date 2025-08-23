import { useEffect, useRef, useState } from 'react';

interface CircularGalleryProps {
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  scrollEase?: number;
}

const CircularGallery: React.FC<CircularGalleryProps> = ({
  bend = 3,
  textColor = "#ffffff",
  borderRadius = 0.05,
  scrollEase = 0.02
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Faculty advisers data
  const facultyAdvisers = [
    {
      name: 'Dr. Pratyay Kuila',
      role: 'President',
      department: 'Computer Science & Engineering',
      bio: 'Evolutionary Algorithms, AI and Machine Learning, Quantum-Inspired Algorithm, Mobile Fog and Edge Computing, Wireless Sensor Networks',
      image: '/placeholder.svg'
    },
    {
      name: 'Dr. Bam Bahadur Sinha',
      role: 'Vice President',
      department: 'Computer Science & Engineering',
      bio: 'Artificial Intelligence & Machine Learning, Deep Learning, Optimization Techniques, Recommender Systems, Generative AI',
      image: '/placeholder.svg'
    },
    {
      name: 'Dr. Diksha Rangwani',
      role: 'Faculty Coordinator',
      department: 'Computer Science & Engineering',
      bio: 'Energy-Efficient Authentication Protocols, Machine Learning based Authentication Protocols, Network Security',
      image: '/placeholder.svg'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMouseX(e.clientX - rect.left);
        setMouseY(e.clientY - rect.top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const radius = 200;
  const centerX = 300;
  const centerY = 300;

  return (
    <div 
      ref={containerRef}
      style={{ 
        height: '600px', 
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0) 70%)'
      }}
    >
      {facultyAdvisers.map((adviser, index) => {
        const angle = (index / facultyAdvisers.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle + scrollY * scrollEase);
        const y = centerY + radius * Math.sin(angle + scrollY * scrollEase);
        
        // Add some parallax effect based on mouse position
        const mouseOffsetX = (mouseX - centerX) * 0.01;
        const mouseOffsetY = (mouseY - centerY) * 0.01;
        
        const finalX = x + mouseOffsetX;
        const finalY = y + mouseOffsetY;

        return (
          <div
            key={adviser.name}
            style={{
              position: 'absolute',
              left: finalX - 100,
              top: finalY - 100,
              width: '200px',
              height: '200px',
              transform: `translateZ(${bend}px)`,
              transition: 'all 0.3s ease-out',
              zIndex: Math.floor(finalY)
            }}
            className="group"
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: `${borderRadius * 100}%`,
                background: 'linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.05))',
                border: '2px solid rgba(0,255,0,0.3)',
                padding: '20px',
                boxShadow: '0 0 20px rgba(0,255,0,0.2)',
                backdropFilter: 'blur(10px)',
                transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
                transition: 'all 0.3s ease-out'
              }}
              className="hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,0,0.4)]"
            >
              {/* Profile Image */}
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-terminal-green/20 flex items-center justify-center">
                <span className="text-xl font-bold text-terminal-green">
                  {adviser.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Name */}
              <h3 
                className="text-sm font-bold text-center mb-1"
                style={{ color: textColor }}
              >
                {adviser.name}
              </h3>
              
              {/* Role */}
              <p className="text-xs text-terminal-green text-center mb-2">
                {adviser.role}
              </p>
              
              {/* Department */}
              <p className="text-xs text-gray-400 text-center">
                {adviser.department}
              </p>
              
              {/* Hover Bio */}
              <div className="absolute inset-0 bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-xs text-white text-center leading-relaxed">
                  {adviser.bio}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Center Glow Effect */}
      <div
        style={{
          position: 'absolute',
          left: centerX - 50,
          top: centerY - 50,
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,0,0.3) 0%, transparent 70%)',
          animation: 'pulse 2s infinite'
        }}
      />
      
      {/* Connection Lines */}
      {facultyAdvisers.map((_, index) => {
        const angle1 = (index / facultyAdvisers.length) * 2 * Math.PI;
        const angle2 = ((index + 1) / facultyAdvisers.length) * 2 * Math.PI;
        
        const x1 = centerX + radius * Math.cos(angle1 + scrollY * scrollEase);
        const y1 = centerY + radius * Math.sin(angle1 + scrollY * scrollEase);
        const x2 = centerX + radius * Math.cos(angle2 + scrollY * scrollEase);
        const y2 = centerY + radius * Math.sin(angle2 + scrollY * scrollEase);
        
        return (
          <svg
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          >
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(0,255,0,0.2)"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          </svg>
        );
      })}
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default CircularGallery;
