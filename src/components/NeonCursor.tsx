import { useEffect, useRef } from "react";

const NeonCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points: { x: number; y: number; alpha: number }[] = [];

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${point.alpha})`; // Neon cyan
        ctx.shadowBlur = 15;
        ctx.shadowColor = "cyan";
        ctx.fill();
        point.alpha -= 0.02;
      }

      // Remove faded points
      for (let i = points.length - 1; i >= 0; i--) {
        if (points[i].alpha <= 0) points.splice(i, 1);
      }

      requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, alpha: 1 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    draw();

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default NeonCursor;

