import React, { useRef, useEffect } from "react";

const GlowingPatternBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    // Characters to show — you can customize this!
    const characters = "01"; // binary code
    const charsArray = characters.split("");

    // Font size and columns
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);

    // Array of y positions for each column
    const drops = Array(columns).fill(0);

    // Draw function
    function draw() {
      // Black background with slight opacity for trail effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)"; // dark navy with alpha
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#22d3ee"; // cyan glowing text
      ctx.font = `${fontSize}px monospace`;
      ctx.shadowColor = "#22d3ee";
      ctx.shadowBlur = 10;

      drops.forEach((y, i) => {
        const text = charsArray[Math.floor(Math.random() * charsArray.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        // Reset drop to top randomly after it passes the bottom
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    // Resize handler
    const handleResize = () => {
      setSize();
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(0);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ backgroundColor: "#0f172a" }}
    />
  );
};

export default GlowingPatternBackground;



