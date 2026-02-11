import React, { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  fontSize?: number;
  color?: string;
  speed?: number; 
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
  fontSize = 16,
  color = '#0F0',
  speed = 33,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const timeoutRef = useRef<number | null>(null);
  const intervalId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const columns = Math.floor(canvas.width / fontSize);
      
      const currentDrops = dropsRef.current;
      if (currentDrops.length < columns) {
        for (let i = currentDrops.length; i < columns; i++) {
          currentDrops[i] = window.innerHeight; 
        }
      } else {
        dropsRef.current = currentDrops.slice(0, columns);
      }
    };

    dropsRef.current = Array(Math.floor(window.innerWidth / fontSize)).fill(1);
    handleResize();

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isActive = true;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = window.setTimeout(() => {
        mouseRef.current.isActive = false;
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const chars = "01"; 

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      const drops = dropsRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);
        
        const distToMouse = Math.abs(x - mouse.x);
        
        const isCloseToMouse = mouse.isActive && distToMouse < 150;

        let shouldReset = false;

        if (mouse.isActive) {
           if (isCloseToMouse) {
             if (y > canvas.height && Math.random() > 0.975) {
               shouldReset = true;
             }
           } else {
             if (y > canvas.height && Math.random() > 0.995) {
                shouldReset = true;
             }
           }
        } 
        else {
           if (y > canvas.height && Math.random() > 0.975) {
             shouldReset = true;
           }
        }

        if (shouldReset) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    intervalId.current = window.setInterval(draw, speed);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (intervalId.current) clearInterval(intervalId.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [fontSize, color, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        position: 'fixed', 
        top: 0,
        left: 0,
        zIndex: -1, 
        pointerEvents: 'none', 
      }}
    />
  );
};

export default MatrixBackground;