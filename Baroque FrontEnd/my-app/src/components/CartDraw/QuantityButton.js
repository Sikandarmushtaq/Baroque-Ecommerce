import { FiMinus, FiPlus } from "react-icons/fi";

export default function QuantityButton({
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="flex border border-gray-300">

      <button
        onClick={onDecrease}
        className="flex items-center justify-center w-10 h-10 transition hover:bg-gray-100"
      >
        <FiMinus size={16} />
      </button>

      <div className="flex items-center justify-center w-10 h-10">
        {quantity}
      </div>

      <button
        onClick={onIncrease}
        className="flex items-center justify-center w-10 h-10 transition hover:bg-gray-100"
      >
        <FiPlus size={16} />
      </button>

    </div>
  );
}