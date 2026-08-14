import CartItem from "./CartItem";

export default function CartList({
  cartItems,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      {cartItems.map((item) => (
        <CartItem
          key={item._id || item.productId}
          item={item}
          onRemove={onRemove}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
}