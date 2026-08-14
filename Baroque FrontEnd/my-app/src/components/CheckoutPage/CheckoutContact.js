import { Link } from "react-router-dom";

const CheckoutContact = () => {
  return (
    <div>

    

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-light tracking-[3px]">
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
        className="w-full px-5 py-4 border rounded-lg outline-none focus:border-black"
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

   

      <div className="mt-8 border rounded-xl p-6 bg-[#fafafa]">

        <h3 className="mb-2 font-medium">
          International Website
        </h3>

        <p className="text-sm leading-7 text-gray-600">
          Shopping from outside Pakistan?
          Visit our International Store for
          worldwide delivery.
        </p>

      </div>

    </div>
  );
};

export default CheckoutContact;