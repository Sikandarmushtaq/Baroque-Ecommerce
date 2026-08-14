import { FiX } from "react-icons/fi";

export default function CartHeader({ onClose }) {
  return (
    <div className="flex justify-between items-center p-6 border-b">
      <h1 className="text-3xl tracking-[6px]">CART</h1>

      <button
  onClick={() => {
    onClose();
  }}
>
  <FiX size={30} />
</button>
    </div>
  );
}