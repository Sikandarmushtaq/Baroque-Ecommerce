import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 sm:py-6"
      >
        <span className="uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">
          {title}
        </span>

        {open ? <FiMinus /> : <FiPlus />}
      </button>

      {open && (
        <div className="pb-4 text-sm leading-7 text-gray-600 sm:pb-6 sm:text-base sm:leading-8">
          {content}
        </div>
      )}

    </div>
  );
};

const ProductAccordion = () => {
  return (
    <div className="mt-8 sm:mt-12">

      <AccordionItem
        title="Product Details"
        content="Premium quality fabric with elegant embroidery. Designed for everyday wear and special occasions."
      />

      <AccordionItem
        title="Delivery"
        content="Delivery usually takes 3-5 working days across Pakistan."
      />

      <AccordionItem
        title="Care Instructions"
        content="Hand wash separately. Do not bleach. Iron on low heat."
      />

    </div>
  );
};

export default ProductAccordion;