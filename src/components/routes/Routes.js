import { Route, Routes } from "react-router-dom";
import PricingPlans from "../pricing-plans/PricingPlans";
import HomePage from "../homepage/HomePage";


const RouteNames = () => {
    return (
        <Routes>
            <Route path="/pricing-plans" element={<PricingPlans />} />
            <Route path="/" element={<HomePage />} />

            {/* <Route path="/paint-to-image" element={<PaintToImage />} />
            <Route path="/mnist" element={<Mnist />} /> */}
        </Routes >
    );
}
export default RouteNames;