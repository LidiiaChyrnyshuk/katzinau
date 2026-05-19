
import styled from "@emotion/styled";

export const Wrapper = styled.div`
	max-width: 500px;
	margin: 40px auto;
	padding: 16px;
	background: #ffffff;
	box-sizing: border-box;
`;

export const Title = styled.h2`
	color: rgb(253, 44, 114); /* Переведено у ваш новий фірмовий rgb */
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

// ЗАХИСТ ВІД ТЕМНОЇ ТЕМИ: додано чіткі кольори та color-scheme
export const Input = styled.input`
	padding: 12px;
	border-radius: 10px;
	border: 1px solid #ddd;
	background-color: #ffffff !important; /* Явно білий фон */
	color: #000000 !important; /* Явно чорний текст */
	color-scheme: light; /* Блокує темні стилі операційної системи */
	font-size: 15px;
	width: 100%;
	box-sizing: border-box;
`;

// ЗАХИСТ ВІД ТЕМНОЇ ТЕМИ: для textarea аналогічно
export const Textarea = styled.textarea`
	padding: 12px;
	border-radius: 10px;
	border: 1px solid #ddd;
	background-color: #ffffff !important;
	color: #000000 !important;
	color-scheme: light;
	font-size: 15px;
	resize: none;
	width: 100%;
	box-sizing: border-box;
`;

export const Button = styled.button`
	padding: 14px;
	border: none;
	border-radius: 12px;
	background: rgb(253, 44, 114);
	color: white;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;
	transition: opacity 0.2s ease;

	&:hover {
		opacity: 0.9;
	}
`;

export const Preview = styled.img`
	width: 100%;
	max-height: 300px;
	object-fit: cover;
	border-radius: 12px;
	margin-top: 8px;
`;

export const ErrorText = styled.p`
	color: #ff4d4d;
	font-size: 13px;
	margin: -6px 0 4px;
	font-weight: 500;
`;
