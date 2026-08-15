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
    <div className="space-y-4 sm:space-y-6">

  
      <div className="p-4 border sm:p-6 rounded-xl">
        <CheckoutContact />
      </div>

   
      <div className="p-4 border sm:p-6 rounded-xl">
        <CheckoutDelivery
          address={address}
          setAddress={setAddress}
        />
      </div>

    
      <div className="p-4 border sm:p-6 rounded-xl">
        <CheckoutShipping />
      </div>

   
      <div className="p-4 border sm:p-6 rounded-xl">
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