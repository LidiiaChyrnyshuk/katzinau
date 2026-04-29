import styled from "@emotion/styled";

export const SliderSection = styled.section`
	position: relative;
	padding: 0 8px;
	width: 100%;
	max-width:100vw;
	overflow-x: hidden;
	contain: layout paint;

	margin-top: 20px;

	@media (min-width: 960px) {
		padding: 0 16px;
	}
`;

export const ArrowsWrap = styled.div``;

export const Arrow = styled.a`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 20;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 48px;
	height: 48px;

	border-radius: 12px;
	background: rgba(255, 255, 255, 0.24);
	backdrop-filter: blur(8px);

	opacity: 0.8;
	transition: opacity 0.2s ease;

	&.is-disabled {
		opacity: 0;
		pointer-events: none;
	}

	&:hover {
		opacity: 1;
	}
`;

export const ArrowLeft = styled(Arrow)`
	left: 16px;

	@media (min-width: 960px) {
		left: 32px;
	}
`;

export const ArrowRight = styled(Arrow)`
	right: 16px;

	@media (min-width: 960px) {
		right: 32px;
	}
`;

export const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	
	overflow: hidden;

	border-radius: 24px;
	border: 2px solid transparent;

	background-image:
		linear-gradient(
			97.15deg,
			#f1c68a 0%,
			#ffeace 40%,
			#ffffff 50%,
			#ffeace 60%,
			#f1c68a 100%
		);

	background-origin: border-box;
	background-clip: padding-box, border-box;

	padding: 8px 0;

	@media (min-width: 960px) {
		border-radius: 32px;
		padding: 16px 0;
	}
`;

export const Mask = styled.div`
	--mask-left: 10%;
	--mask-right: 90%;

	-webkit-mask-image: linear-gradient(
		to right,
		transparent 0%,
		#000 var(--mask-left),
		#000 var(--mask-right),
		transparent 100%
	);

	mask-image: linear-gradient(
		to right,
		transparent 0%,
		#000 var(--mask-left),
		#000 var(--mask-right),
		transparent 100%
	);

	mask-size: 100% 100%;
	mask-repeat: no-repeat;

	transition: mask-image 0.25s ease;

	overflow: hidden;
	display: block;
`;

export const Track = styled.div`
	display: flex;
	gap: 8px;
	height: 352px;
	
	will-change: transform;
	cursor: grab;
	touch-action: pan-y;

	overflow: visible;

	&::-webkit-scrollbar {
		display: none;
	}

	&:active {
		cursor: grabbing;
	}
`;
