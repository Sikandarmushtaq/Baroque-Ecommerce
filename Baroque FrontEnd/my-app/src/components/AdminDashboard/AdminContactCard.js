const AdminContactCard = ({ contact }) => {
  return (
    <div className="border rounded-xl p-6 mb-5">

      <div className="mb-4">
        <h3 className="text-sm text-gray-500">
          Name
        </h3>

        <p className="text-lg">
          {contact.name}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-sm text-gray-500">
          Email
        </h3>

        <p>
          {contact.email}
        </p>
      </div>

      <div>
        <h3 className="text-sm text-gray-500">
          Message
        </h3>

        <p>
          {contact.message}
        </p>
      </div>

    </div>
  );
};

export default AdminContactCard;