
import styled from "@emotion/styled";

export const Card = styled.div`
	width: 248px;
	height: 352px;
	flex: 0 0 auto;
	position: relative;
	border-radius: 24px; /* Трохи округлили для сучаснішого вигляду */
	overflow: hidden;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); /* М'яка тінь для картки */
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Info = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 80px 16px 70px 16px; /* Збільшили падінг знизу та зверху */
	color: white;
	box-sizing: border-box;

	/* Градієнтний затемнювач знизу, щоб білий текст ідеально читався на будь-якому фото */
	background: linear-gradient(
		to top,
		rgba(0, 0, 0, 0.8) 0%,
		rgba(0, 0, 0, 0.4) 60%,
		transparent 100%
	);

	h3 {
		font-size: 20px;
		font-weight: 700;
		margin: 0 0 4px 0;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
	}

	p {
		font-size: 14px;
		margin: 0;
		opacity: 0.9;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis; /* Якщо опис задовгий, він красиво обріжеться крапками */
	}
`;

export const Actions = styled.div`
	position: absolute;
	bottom: 14px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 14px;
	z-index: 2;
`;


export const ActionButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	/* Зменшений акуратний розмір кнопок */
	width: 38px;
	height: 38px;

	/* Прозоре матове скло БЕЗ бордерів */
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px); /* Для стабільних ефектів на iOS */
	border: none; /* ПОВНІСТЮ ПРИБРАЛИ БОРДЕР */
	border-radius: 50%;

	cursor: pointer;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
	transition: all 0.2s ease-in-out;
	outline: none;
	-webkit-tap-highlight-color: transparent;

	/* Колір іконки передається індивідуально */
	color: ${(props) => props.iconColor || "#ffffff"};

	&:hover {
		background: rgba(
			255,
			255,
			255,
			0.3
		); /* Стає трохи яскравішим при наведенні */
		transform: scale(1.1); /* Легке приємне збільшення */
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
	}

	&:active {
		transform: scale(0.92);
	}
`;
