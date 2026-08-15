const AdminContactCard = ({ contact }) => {
  return (
    <div className="p-4 mb-4 border sm:p-6 rounded-xl sm:mb-5">

      <div className="mb-3 sm:mb-4">
        <h3 className="text-sm text-gray-500">
          Name
        </h3>

        <p className="text-base break-words sm:text-lg">
          {contact.name}
        </p>
      </div>

      <div className="mb-3 sm:mb-4">
        <h3 className="text-sm text-gray-500">
          Email
        </h3>

        <p className="break-words">
          {contact.email}
        </p>
      </div>

      <div>
        <h3 className="text-sm text-gray-500">
          Message
        </h3>

        <p className="break-words">
          {contact.message}
        </p>
      </div>

    </div>
  );
};

export default AdminContactCard;