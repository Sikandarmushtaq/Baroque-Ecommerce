import ContactForm from "./ContactFooterForm";

const ContactSection = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-center text-5xl tracking-[10px] font-light mb-16">
          CONTACT
        </h1>

        <ContactForm />

      </div>
    </section>
  );
};

export default ContactSection;