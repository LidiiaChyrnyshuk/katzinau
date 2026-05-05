
import { useEffect, useRef } from "react";

export default function CursorEffects() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		const sparks = [];

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resize();
		window.addEventListener("resize", resize);

		const spawnSparks = (x, y) => {
			for (let i = 0; i < 6; i++) {
				sparks.push({
					x,
					y,
					vx: (Math.random() - 0.5) * 4,
					vy: (Math.random() - 0.5) * 4,
					life: 1,
					size: Math.random() * 2,
				});
			}
		};

		const moveHandler = (e) => {
			spawnSparks(e.clientX, e.clientY);
		};

		window.addEventListener("pointermove", moveHandler);

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = sparks.length - 1; i >= 0; i--) {
				const s = sparks[i];

				s.x += s.vx;
				s.y += s.vy;
				s.life -= 0.02;

				ctx.globalAlpha = s.life;
				ctx.beginPath();
				ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
				ctx.fillStyle = "#ff4d6d";
				ctx.fill();

				if (s.life <= 0) sparks.splice(i, 1);
			}

			ctx.globalAlpha = 1;
			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("pointermove", moveHandler);
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				inset: 0,
				pointerEvents: "none",
				zIndex: 100,
			}}
		/>
	);
}
