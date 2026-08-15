const CheckoutShipping = () => {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-light tracking-[2px] sm:mb-8 sm:text-3xl sm:tracking-[3px]">
        Shipping Method
      </h2>

      <div className="flex items-center justify-between gap-3 p-4 border rounded-lg sm:p-5">

        <div>
          <p className="font-medium">
            Standard Shipping
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Delivery in 3-5 business days
          </p>
        </div>

        <p className="flex-shrink-0 font-semibold">
          FREE
        </p>

      </div>

    </div>
  );
};

export default CheckoutShipping;