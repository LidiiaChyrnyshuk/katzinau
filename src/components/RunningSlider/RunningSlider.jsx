import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import { Wrapper, Slide } from "./RunningSlider.styled";

const baseSlides = [
	"Чекаю свайпу від своєї киці",
	"Вона муркнула — і я пропав…",
	"Це не просто додаток. Це доля. Мяу!",
];

// дублюємо
const slides = [...baseSlides, ...baseSlides, ...baseSlides];

export default function RunningSlider() {
	return (
		<Wrapper>
			<Swiper
				modules={[Autoplay]}
				loop={true}
				slidesPerView="auto"
				spaceBetween={16}
				speed={6000}
				autoplay={{
					delay: 1,
					disableOnInteraction: false,
				}}
				allowTouchMove={false}
			>
				{slides.map((text, index) => (
					<SwiperSlide key={index} style={{ width: "auto", flexShrink: 0 }}>
						<Slide>{text}</Slide>
					</SwiperSlide>
				))}
			</Swiper>
		</Wrapper>
	);
}
