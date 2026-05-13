import styled from "@emotion/styled";

export const Wrapper = styled.div`
	max-width: 500px;
	margin: 40px auto;
	padding: 16px;
`;

export const Title = styled.h2`
	color: #fd2c72;
	font-weight: 900;
	font-size: 20px;
	line-height: 1.2;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 24px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const Input = styled.input`
	padding: 12px;
	border-radius: 10px;
	border: 1px solid #ddd;
`;

export const Textarea = styled.textarea`
	padding: 12px;
	border-radius: 10px;
	border: 1px solid #ddd;
	resize: none;
`;

export const Button = styled.button`
	padding: 14px;
	border: none;
	border-radius: 12px;
	background: #fd2c72;
	color: white;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}
`;

export const Preview = styled.img`
	width: 100%;
	border-radius: 12px;
	margin-top: 8px;
`;

export const ErrorText = styled.p`
	color: red;
	font-size: 12px;
	margin: -6px 0 4px;
`;
