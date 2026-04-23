import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyGigs() {
  const navigate = useNavigate();

  const [gigs, setGigs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("gigs")) || [];
    setGigs(data);
  }, []);

  const saveGigs = (data) => {
    setGigs(data);
    localStorage.setItem("gigs", JSON.stringify(data));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.title || !form.price) {
      alert("Fill required fields");
      return;
    }

    if (editingId) {
      const updated = gigs.map((g) =>
        g.id === editingId ? { ...g, ...form } : g,
      );
      saveGigs(updated);
    } else {
      const newGig = {
        id: Date.now(),
        ...form,
      };
      saveGigs([...gigs, newGig]);
    }

    setForm({
      title: "",
      price: "",
      description: "",
      name: "",
      email: "",
      phone: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (gig) => {
    setForm(gig);
    setEditingId(gig.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    saveGigs(gigs.filter((g) => g.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 p-6 flex gap-6">
      <div className="flex-1">

    <div className="flex justify-between">
        <div className="mb-6">
          {/* LEFT: BACK */}
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 font-medium hover:underline"
          >
            ← Back to Home
          </button>

          {/* RIGHT (optional): Logout etc */}
        </div>
       

        <div className="mb-6">
          <div className="flex flex-col items-center mb-2">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-1">
              My Gigs
            </h2>

            <p className="text-gray-600 mt-2 text-sm">
              Manage your services and grow your freelance profile 🚀
            </p>

            <div className="w-24 h-1 mx-auto mt-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="mb-6">
          <button
            onClick={() => {
              setEditingId(null);
              setShowForm(true);
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg"
          >
            + Add New Gig
          </button>
        </div>

        </div>
      

        <div className="grid grid-cols-3 gap-6">
          {gigs.map((gig) => (
            <div
              onClick={() => navigate(`/gig/${gig.id}`, { state: gig })}
              className="bg-white p-6 rounded-xl shadow flex justify-between items-center cursor-pointer hover:scale-105 transition"
            >
              <div>
                <h3 className="text-lg font-semibold">{gig.title}</h3>
                <p className="text-gray-600">₹ {gig.price}</p>
                <p className="text-sm text-gray-500 mt-2">{gig.name}</p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleEdit(gig)}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(gig.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="w-24 h-24 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* FORM FOR ADDING AND UPDATING GIG */}

      {showForm && (
        <div className="w-[400px] bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">
            {editingId ? "Edit Gig" : "Add New Gig"}
          </h2>

          <input
            name="title"
            placeholder="Gig Title"
            value={form.title}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full mb-6 p-3 border rounded-lg"
          />

          <h3 className="font-semibold mb-3">Contact Details</h3>

          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded-lg"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded-lg"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full mb-6 p-3 border rounded-lg"
          />

          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg"
            >
              {editingId ? "Update Gig" : "Save Gig"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
