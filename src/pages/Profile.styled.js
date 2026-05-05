import styled from "@emotion/styled";

export const Wrapper = styled.div`
	padding: 16px;
	max-width: 1200px;
	margin: 0 auto;
`;

export const Title = styled.h2`
	text-align: center;
	margin: 20px 0;
`;

export const UserBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

export const Avatar = styled.img`
	width: 90px;
	height: 90px;
	border-radius: 50%;
`;

export const UserName = styled.h3``;

export const Filters = styled.div`
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-bottom: 20px;
	flex-wrap: wrap;
`;

export const Button = styled.button`
	padding: 6px 12px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	background: #ffffff;
	color: white;
`;

export const Grid = styled.div`
	column-count: 1;
	column-gap: 16px;

	@media (min-width: 600px) {
		column-count: 2;
	}

	@media (min-width: 960px) {
		column-count: 3;
	}
`;

export const Card = styled.div`
	break-inside: avoid;
	margin-bottom: 16px;
	background: #fd2c72;
	border-radius: 20px;
	padding: 12px;
`;

export const Image = styled.img`
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	border-radius: 16px;
	object-fit: cover;
`;

export const Info = styled.div`
	padding: 10px;
`;

export const Stats = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-top: 8px;
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-top: 10px;
`;

export const Input = styled.input`
	width: 100%;
	margin-bottom: 6px;
  color: #ffffff;
`;

export const Textarea = styled.textarea`
	width: 100%;
	color: #ffffff;
`;
