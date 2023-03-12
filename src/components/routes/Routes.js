import { Route, Routes } from "react-router-dom";
import PricingPlans from "../pricing-plans/PricingPlans";
import HomePage from "../homepage/HomePage";
import TermsCondition from "../terms-n-conditions/TermsCondition";
import PrivacyPolicy from "../privacy-policy/PrivacyPolicy";
import MyAccount from "../myaccount/MyAccount";
import MySubscriptions from "../myaccount/MySubscriptions";
import Checkout from "../checkout/Checkout";


const RouteNames = () => {
    return (
        <Routes>
            <Route path="/pricing-plans" element={<PricingPlans />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/terms-conditions" element={<TermsCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/subscriptions" element={<MySubscriptions />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes >
    );
}
export default RouteNames;