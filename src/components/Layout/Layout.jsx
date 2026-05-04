import { AppBar } from "../AppBar/AppBar";
import Footer  from "../Footer/Footer";
import { Loader } from "../Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./Layout.styled";
import CursorEffects from "../CursorEffects/CursorEffects";

const Layout = () => {
	return (
		<MainContainer>
			<div style={{ overflow: "hidden", width: "100%" }}>
				<AppBar />
			</div>

			<main style={{ overflow: "hidden", width: "100%" }}>
				<Suspense fallback={<Loader />}>
					<CursorEffects />
					<Outlet />
				</Suspense>
			</main>

			<div style={{ overflow: "hidden", width: "100%" }}>
				<Footer />
			</div>
		</MainContainer>
	);
};
export default Layout;
