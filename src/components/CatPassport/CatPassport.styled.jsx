import styled from "styled-components";

export const Card = styled.div`
	background: #fff;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
`;

export const Image = styled.img`
	width: 100%;
	max-height: 500px;
	object-fit: cover;
`;

export const Info = styled.div`
	padding: 15px;
	text-align: left;

	h3 {
		margin: 0 0 5px;
	}

	p {
		margin: 4px 0;
	}
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;

	button {
		border: none;
		background: transparent;
		font-size: 18px;
		cursor: pointer;
	}
`;

export const Input = styled.input`
	width: 100%;
	margin-bottom: 8px;
	padding: 6px;
	border-radius: 8px;
	border: 1px solid #ddd;
`;

export const Textarea = styled.textarea`
	width: 100%;
	padding: 6px;
	border-radius: 8px;
	border: 1px solid #ddd;
`;
