const CheckoutPayment = () => {
  return (
    <div className="w-full">
      
   
      <h2 className="mb-2 text-2xl font-light tracking-[2px] sm:text-3xl sm:tracking-[3px]">
        Payment
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        All transactions are secure and encrypted.
      </p>

      <div className="overflow-hidden border border-gray-300 rounded-xl">
        <div className="flex flex-col items-start gap-3 px-4 py-4 bg-white sm:flex-row sm:items-center sm:justify-between sm:px-5">
          
          <div className="flex items-center gap-3">
            <input
              type="radio"
              checked
              readOnly
              className="accent-black"
            />

            <span className="text-sm font-medium">
              Credit / Debit Card
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="px-2 py-1 text-white bg-blue-700 rounded">
              VISA
            </span>

            <span className="px-2 py-1 text-white bg-black rounded">
              Mastercard
            </span>
          </div>

        </div>
      </div>

  
      <div className="p-4 mt-5 border border-gray-200 sm:p-5 bg-gray-50 rounded-xl">
        <p className="text-sm leading-6 text-gray-600">
          To confirm your order, click on the{" "}
          <span className="font-semibold text-black">
            Pay Now
          </span>
          button below.
        </p>
      </div>

    </div>
  );
};

export default CheckoutPayment;