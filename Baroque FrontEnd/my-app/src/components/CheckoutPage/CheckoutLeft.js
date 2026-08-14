import CheckoutContact from "./CheckoutContact";
import CheckoutDelivery from "./CheckoutDelivery";
import CheckoutShipping from "./CheckoutShipping";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutPayButton from "./CheckoutPayButton";

const CheckoutLeft = ({
  address,
  setAddress,
  cartItems,
  totalPrice,
}) => {
  return (
    <div className="space-y-6">

  
      <div className="p-6 border rounded-xl">
        <CheckoutContact />
      </div>

   
      <div className="p-6 border rounded-xl">
        <CheckoutDelivery
          address={address}
          setAddress={setAddress}
        />
      </div>

    
      <div className="p-6 border rounded-xl">
        <CheckoutShipping />
      </div>

   
      <div className="p-6 border rounded-xl">
        <CheckoutPayment />
      </div>

     
      <CheckoutPayButton
        address={address}
        cartItems={cartItems}
        totalPrice={totalPrice}
      />

    </div>
  );
};

export default CheckoutLeft;