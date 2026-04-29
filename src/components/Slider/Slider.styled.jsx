import styled from "@emotion/styled";
import taps from "../../assets/slider_title_img.png";
import herz from "../../assets/slider_title_herz.png";

export const SliderSection = styled.section`
	position: relative;
	padding-bottom: 20px;
	width: 100%;
	max-width: 100vw;
	overflow-x: hidden;
	contain: layout paint;
	background: #fd2c72;
	margin-top: 20px;

	@media (min-width: 960px) {
		padding-bottom: 20px;
	}
`;

export const SliderTitle = styled.div`
position: relative;
z-index:5;
	font-weight: 900;
	font-size: 24px;
	line-height: 1.2;
	text-transform: uppercase;
	text-align: left;
	color:#ffffff;
	padding-left:16px;
	margin-bottom: 20px;

	&::after {
			content: "";
			position: absolute;
			top: 0;
			right: 50%;
			width: 11.11vw;
			height: 8.33vw;
	
			background-image: url(${taps});
			background-size: contain;
			background-repeat: no-repeat;
			z-index:2;
		}

		&::before {
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			width: 27.77vw;
			height: 80px;
	
			background-image: url(${herz});
			background-size: contain;
			background-repeat: no-repeat;
			z-index:2;
		}

		@media (min-width: 1024px) {
				font-size: 90px;
		
				&::after {
					content: "";
					position: absolute;
					top: 0;
					right: 30%;
					width: 180px;
					height: 170px;
		
					background-image: url(${taps});
					background-size: contain;
					background-repeat: no-repeat;
				}

				&::before {
			content: "";
			position: absolute;
			top: 120px;
			right: 10px;
			width: 180px;
			height: 120px;
	
			background-image: url(${herz});
			background-size: contain;
			background-repeat: no-repeat;
		}
`;

export const SliderContainer = styled.div`
	position: relative;
	width: 100%;

	overflow: hidden;

	border-radius: 24px;
	border: 2px solid transparent;

	background-image: linear-gradient(
		120deg,
		#fd2c72 0%,
		#ff5c8f 30%,
		#ffffff 50%,
		#ff5c8f 70%,
		#fd2c72 100%
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
	--mask-left: 5%;
	--mask-right: 95%;

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
