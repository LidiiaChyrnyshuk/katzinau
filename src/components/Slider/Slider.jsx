import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import CatCard from "../CatCard/CatCard";

import {
	SliderSection,
	SliderContainer,
	Mask,
	SliderTitle,
} from "./Slider.styled";

export default function Slider({ cats }) {
	return (
		<SliderSection>
			<SliderTitle>Пухнасті<br/> профілі, гортай</SliderTitle>
			<SliderContainer>
				<Mask>
					<Swiper spaceBetween={8} slidesPerView={"auto"} grabCursor={true}>
						{cats.map((cat) => (
							<SwiperSlide key={cat.id} style={{ width: "248px" }}>
								<CatCard cat={cat} />
							</SwiperSlide>
						))}
					</Swiper>
				</Mask>
			</SliderContainer>
		</SliderSection>
	);
}
