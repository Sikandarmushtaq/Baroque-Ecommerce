import { Link } from "react-router-dom";

const CheckoutContact = () => {
  return (
    <div>

    

      <div className="flex flex-col gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">

        <h2 className="text-2xl font-light tracking-[2px] sm:text-3xl sm:tracking-[3px]">
          Contact
        </h2>

        <p className="text-sm">
          Have an account?{" "}
          <Link
            to="/login"
            className="underline"
          >
            Sign in
          </Link>
        </p>

      </div>

  

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 text-sm border rounded-lg outline-none sm:px-5 sm:py-4 sm:text-base focus:border-black"
      />

    

      <label className="flex items-center gap-3 mt-5 cursor-pointer">

        <input
          type="checkbox"
          className="w-5 h-5"
        />

        <span className="text-sm">
          Email me with news and offers
        </span>

      </label>

   

      <div className="p-4 mt-8 border sm:p-6 rounded-xl bg-[#fafafa]">

        <h3 className="mb-2 font-medium">
          International Website
        </h3>

        <p className="text-sm leading-6 text-gray-600 sm:leading-7">
          Shopping from outside Pakistan?
          Visit our International Store for
          worldwide delivery.
        </p>

      </div>

    </div>
  );
};

export default CheckoutContact;