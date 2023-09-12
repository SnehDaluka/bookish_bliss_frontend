import React, { useEffect } from "react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const callCartPage = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/cartitems?email=${localStorage.getItem(
            "email"
          )}`
        );
        const data = await res.json();
        if (!data[0]) {
          navigate("/");
        }
      } catch (error) {
        console.error("Server Error");
      }
    };
    if (
      !localStorage.getItem("email") ||
      document.referrer.endsWith("orderdetails")
    )
      navigate("/");
  }, []);
  return (
    <>
      <Cart pageName="order-details" />
    </>
  );
};

export default OrderDetails;
