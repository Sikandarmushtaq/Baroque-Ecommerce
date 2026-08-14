import QuantityButton from "./QuantityButton";

export default function CartItem({
  item,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="flex gap-4 p-4">
      <img
        src={item.image}
        alt={item.name}
        className="object-cover w-32 h-40"
      />

      <div className="flex-1">
        <p className="text-xs tracking-[2px] uppercase text-gray-500">
          {item.type}
        </p>

        <h2 className="mt-2 text-xl uppercase">
          {item.name}
        </h2>

        <h3 className="mt-3 font-semibold">
          PKR {item.price}
        </h3>

        <div className="flex items-center gap-4 mt-5">
          <QuantityButton
            quantity={item.quantity}
            onIncrease={() => onIncrease(item._id || item.productId, item.quantity)}
            onDecrease={() => onDecrease(item._id || item.productId, item.quantity)}
          />

          <button
            onClick={() => onRemove(item._id || item.productId)}
            className="underline transition hover:text-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}