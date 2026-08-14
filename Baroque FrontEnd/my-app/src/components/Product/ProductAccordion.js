import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-6"
      >
        <span className="uppercase tracking-[3px] text-sm">
          {title}
        </span>

        {open ? <FiMinus /> : <FiPlus />}
      </button>

      {open && (
        <div className="pb-6 leading-8 text-gray-600">
          {content}
        </div>
      )}

    </div>
  );
};

const ProductAccordion = () => {
  return (
    <div className="mt-12">

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