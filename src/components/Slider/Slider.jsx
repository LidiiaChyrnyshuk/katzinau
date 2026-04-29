import { useEffect, useRef } from "react";
import CatCard from "../CatCard/CatCard";

import {
	SliderSection,
	SliderContainer,
	Mask,
	Track,
	ArrowLeft,
	ArrowRight,
} from "./Slider.styled";

export default function Slider({ cats }) {
	const trackRef = useRef(null);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const slides = Array.from(track.children);
		const btnLeft = document.getElementById("arrow-left");
		const btnRight = document.getElementById("arrow-right");
		const mask = document.querySelector(".vip_page_level_container_mask");

		const HOLD_DELAY = 300;
		const FAST_INTERVAL = 80;
		const DRAG_THRESHOLD = 8;

		let holdTimeout = null;
		let holdInterval = null;

		let position = 0;
		let cardWidth = 0;
		let maxShift = 0;

		let currentIndex = 0;

		let velocity = 0;
		let startTime = 0;

		let dragging = false;
		let isDraggingNow = false;
		let startX = 0;
		let startPos = 0;

		const getGap = () => parseFloat(getComputedStyle(track).gap) || 0;

		const getContainerWidth = () =>
			track.closest(".slider-container").clientWidth;

		const getCenterOffset = () => getContainerWidth() / 2 - cardWidth / 2;

		const clampPosition = () => {
			if (position > 0) position = 0;
			if (position < maxShift) position = maxShift;
		};

		const getCurrentIndexFromPosition = () =>
			Math.round((-position + getCenterOffset()) / cardWidth);

		const updateMaskAndEdgeOffset = () => {
			if (isDraggingNow) return 0;

			const atStart = currentIndex === 0;
			const atEnd = currentIndex === slides.length - 1;

			const edgeValue = window.innerWidth >= 960 ? 16 : 8;

			if (atStart) {
				mask.style.setProperty("--mask-left", "0%");
				mask.style.setProperty("--mask-right", "90%");
				return edgeValue;
			}

			if (atEnd) {
				mask.style.setProperty("--mask-left", "10%");
				mask.style.setProperty("--mask-right", "100%");
				return -edgeValue;
			}

			mask.style.setProperty("--mask-left", "10%");
			mask.style.setProperty("--mask-right", "90%");
			return 0;
		};

		const applyTransform = (animated = true) => {
			track.style.transition = animated
				? "transform 0.45s cubic-bezier(0.22,0.61,0.36,1)"
				: "none";

			const edgeOffset = updateMaskAndEdgeOffset();

			track.style.transform = `translate3d(${position + edgeOffset}px,0,0)`;

			btnLeft.classList.toggle("is-disabled", currentIndex === 0);
			btnRight.classList.toggle(
				"is-disabled",
				currentIndex === slides.length - 1,
			);
		};

		const goToIndex = (index, animated = true) => {
			currentIndex = Math.max(0, Math.min(slides.length - 1, index));

			position = -(currentIndex * cardWidth) + getCenterOffset();

			clampPosition();
			applyTransform(animated);
		};

		const recalc = () => {
			cardWidth = slides[0]?.offsetWidth + getGap();
			maxShift = -(track.scrollWidth - getContainerWidth());
			goToIndex(currentIndex, false);
		};

		window.addEventListener("resize", recalc);
		recalc();

		const rightClick = (e) => {
			e.preventDefault();
			goToIndex(currentIndex + 1);
		};

		const leftClick = (e) => {
			e.preventDefault();
			goToIndex(currentIndex - 1);
		};

		btnRight.addEventListener("click", rightClick);
		btnLeft.addEventListener("click", leftClick);

		const dragStart = (e) => {
			dragging = true;
			isDraggingNow = true;

			startX = e.pageX || e.touches[0].pageX;
			startPos = position;
			startTime = Date.now();
			velocity = 0;

			track.style.transition = "none";
		};

		const dragMove = (e) => {
			if (!dragging) return;

			const x = e.touches ? e.touches[0].pageX : e.pageX;
			const delta = x - startX;

			if (Math.abs(delta) < DRAG_THRESHOLD) return;

			e.preventDefault();

			position = startPos + delta;

			const elapsed = Date.now() - startTime;
			if (elapsed > 0) {
				velocity = Math.max(-3, Math.min(3, delta / elapsed));
			}

			clampPosition();

			track.style.transform = `translate3d(${position}px,0,0)`;
		};

		const dragEnd = () => {
			if (!dragging) return;

			dragging = false;
			isDraggingNow = false;

			let index = getCurrentIndexFromPosition();

			if (Math.abs(velocity) > 0.5) {
				const boost = Math.min(4, Math.ceil(Math.abs(velocity) * 2));
				index += velocity < 0 ? boost : -boost;
			}

			goToIndex(index);
		};

		const startHold = (direction) => {
			holdTimeout = setTimeout(() => {
				holdInterval = setInterval(() => {
					goToIndex(currentIndex + (direction < 0 ? 1 : -1), false);
				}, FAST_INTERVAL);
			}, HOLD_DELAY);
		};

		const stopHold = () => {
			clearTimeout(holdTimeout);
			clearInterval(holdInterval);
			holdTimeout = null;
			holdInterval = null;
			goToIndex(currentIndex);
		};

		btnRight.addEventListener("mousedown", () => startHold(-1));
		btnLeft.addEventListener("mousedown", () => startHold(1));

		["mouseup", "mouseleave"].forEach((evt) => {
			btnRight.addEventListener(evt, stopHold);
			btnLeft.addEventListener(evt, stopHold);
		});

		track.addEventListener("touchstart", dragStart, { passive: true });
		track.addEventListener("touchmove", dragMove, { passive: false });
		track.addEventListener("touchend", dragEnd);
		track.addEventListener("touchcancel", dragEnd);

		track.addEventListener("mousedown", (e) => {
			e.preventDefault();
			dragStart(e);
		});

		document.addEventListener("mousemove", dragMove);
		document.addEventListener("mouseup", dragEnd);

		// 🧹 CLEANUP
		return () => {
			window.removeEventListener("resize", recalc);
			document.removeEventListener("mousemove", dragMove);
			document.removeEventListener("mouseup", dragEnd);
			btnRight.removeEventListener("click", rightClick);
			btnLeft.removeEventListener("click", leftClick);
		};
	}, []);

	return (
		<SliderSection>
			<ArrowLeft id="arrow-left">←</ArrowLeft>
			<ArrowRight id="arrow-right">→</ArrowRight>

			<SliderContainer className="slider-container">
				<Mask className="vip_page_level_container_mask">
					<Track ref={trackRef}>
						{cats.map((cat) => (
							<CatCard key={cat.id} cat={cat} />
						))}
					</Track>
				</Mask>
			</SliderContainer>
		</SliderSection>
	);
}
