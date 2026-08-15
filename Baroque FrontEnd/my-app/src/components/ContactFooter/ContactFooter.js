import ContactForm from "./ContactFooterForm";

const ContactSection = () => {
  return (
    <section className="w-full py-16 bg-white sm:py-28">
      <div className="max-w-3xl px-4 mx-auto sm:px-6">

        <h1 className="mb-10 text-3xl tracking-[5px] font-light text-center sm:text-5xl sm:tracking-[10px] sm:mb-16">
          CONTACT
        </h1>

        <ContactForm />

      </div>
    </section>
  );
};

export default ContactSection;