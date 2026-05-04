import styled from "@emotion/styled";
export const Wrapper = styled.div`
	width: 100%;
	max-width: 100%;
	overflow: hidden;
	mask-image: linear-gradient(
		to right,
		transparent 0%,
		black 10%,
		black 90%,
		transparent 100%
	);
	margin: 20px 0 40px 0;
`;

export const Slide = styled.div`
	white-space: nowrap;

	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	padding: 16px 24px;
	border-radius: 16px;

	background: linear-gradient(135deg, #fd2c72 0%, #ff6fa0 50%, #ffd1e0 100%);

	color: white;
`;