import Hero from "../components/Hero/Hero";
import {cats} from "../data/cats";
import Slider from "../components/Slider/Slider";

export default function Home() {
	return (
		<>
			<Hero />
			<div style={{ overflow: "hidden", width: "100%" }}>
				<Slider cats={cats} />
			</div>
		</>
	);
}
