import { useState, useEffect } from "react";
import axios from "axios";
import AdminContactCard from "./AdminContactCard";
import { useNavigate } from "react-router-dom";

const AdminContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const getContacts = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken");

      const response = await axios.get(
        "http://localhost:3000/admin/getadmincontacts",
        {
          headers: {
            Authorization: adminToken,
          },
        }
      );

      if (response.data.status === "found") {
        setContacts(response.data.contact);
      }
    } catch (err) {
      console.log(err.message);
        if (err.response?.status === 401) {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }
    }

    setLoading(false);
  };

  useEffect(() => {
    getContacts();
  }, []);

  if (loading) {
    return (
      <div>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div>

      <h2 className="text-3xl tracking-[5px] mb-8">
        CONTACT LIST
      </h2>

      {contacts.length === 0 ? (

        <p className="text-gray-500">
          No messages yet.
        </p>

      ) : (

        contacts.map((contact) => (
          <AdminContactCard
            key={contact._id}
            contact={contact}
          />
        ))

      )}

    </div>
  );
};

export default AdminContactList;