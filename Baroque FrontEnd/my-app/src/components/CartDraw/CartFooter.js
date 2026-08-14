import { useNavigate } from "react-router-dom";


export default function CartFooter({ cartItems }) {
const navigate = useNavigate();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-5 border-t">

      <p className="mb-5 text-gray-500">
        Taxes and shipping calculated at checkout
      </p>

      <button
  onClick={() => navigate("/checkout")}
  className="w-full bg-black text-white py-4 tracking-[3px]"
>
        CHECKOUT • PKR {total.toLocaleString()}
      </button>

    </div>
  );
}