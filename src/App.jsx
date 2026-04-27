import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../src/components/Layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const AddCat = lazy(() => import("./pages/AddCat"));
const Profile = lazy(() => import("./pages/Profile"));

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="addCat" element={<AddCat />} />
				<Route path="profile" element={<Profile />} />
				<Route path="*" element={<Navigate to="/" replace={true} />} />
			</Route>
		</Routes>
	);
};
