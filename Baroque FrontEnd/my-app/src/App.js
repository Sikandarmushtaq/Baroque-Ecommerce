import React from "react";
import MainBanner from "./components/MainPage/MainBanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails";
import Verification from "./components/LoginPages&Verificaion/VerificationPage";
import CollectionPage from "./components/Product/CollectionPage";
import WishlistPage from "./components/WishListPage/WishlistPage";
import OrderSection from "./components/UserDashboard/OrderSection";
import ContactFooter from "./components/ContactFooter/ContactMainFooter";
import AdminLoginForm from "./components/AdminDashboard/AdminLoginForm";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import Login from "./components/LoginPages&Verificaion/LoginPage";
import ProtectedRoute from "./components/Protected Routes/ProtectedRoutes";
import OrderSuccess from "./components/CheckoutPage/OrderSuccess";
import OrderCancel from "./components/CheckoutPage/OrderCancel";
import AdminProtectedRoute from "./components/Protected Routes/AdminProtectedRoute";
import AdminAddProduct from "./components/AdminDashboard/AdminAddProduct";
import PremiumProductsPage from "./components/Product/PremiumProductsPage";
import Mentor from "./components/Mentor/Mentor";

const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<MainBanner />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/userDashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/verification" element={<Verification />} />

          <Route path="/product" element={<CollectionPage />} />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route path="/wishlist" element={<WishlistPage />} />

          <Route path="/orders" element={<OrderSection />} />

          <Route path="/contactUs" element={<ContactFooter />} />
          <Route path="/for-sir-awais" element={<Mentor />} />

          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/addproduct"
            element={
              <AdminProtectedRoute>
                <AdminAddProduct />
              </AdminProtectedRoute>
            }
          />

          <Route path="/admin/login" element={<AdminLoginForm />} />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/ordersuccess" element={<OrderSuccess />} />

          <Route path="/ordercancel" element={<OrderCancel />} />

          <Route path="/premium" element={<PremiumProductsPage />} />

        </Routes>
      </Router>

    </div>
  );
};

export default App;