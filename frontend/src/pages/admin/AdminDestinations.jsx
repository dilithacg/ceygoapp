import React, { useEffect, useState } from "react";
import API from "../../services/api";

const AdminDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editForm, setEditForm] = useState({
    name: "",
    location: "",
    description: "",
    image: "",
    rating: "",
  });

  // FETCH DESTINATIONS
  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const res = await API.get("/destinations");
      setDestinations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteDestination = async (id) => {
    if (!window.confirm("Delete this destination?")) return;

    try {
      await API.delete(`/destinations/${id}`);

      setDestinations((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  // START EDIT
  const startEdit = (item) => {
    setEditingId(item._id);

    setEditForm({
      name: item.name,
      location: item.location,
      description: item.description,
      image: item.image,
      rating: item.rating,
    });
  };

  // UPDATE
  const updateDestination = async () => {
    try {
      await API.put(`/destinations/${editingId}`, editForm);

      alert("Updated Successfully ✅");

      setEditingId(null);

      fetchDestinations();
    } catch (error) {
      console.log(error);
      alert("Update Failed ❌");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-blue-600">
        Manage Destinations
      </h1>

      <div className="grid gap-8">
        {destinations.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-72 h-72 object-cover"
              />

              {/* CONTENT */}
              <div className="p-8 flex-1">
                {editingId === item._id ? (
                  <>
                    <input
                      value={editForm.name}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          name: e.target.value,
                        })
                      }
                      className="w-full border p-3 rounded-xl mb-4"
                    />

                    <input
                      value={editForm.location}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          location: e.target.value,
                        })
                      }
                      className="w-full border p-3 rounded-xl mb-4"
                    />

                    <input
                      value={editForm.image}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          image: e.target.value,
                        })
                      }
                      className="w-full border p-3 rounded-xl mb-4"
                    />

                    <input
                      value={editForm.rating}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          rating: e.target.value,
                        })
                      }
                      className="w-full border p-3 rounded-xl mb-4"
                    />

                    <textarea
                      value={editForm.description}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          description: e.target.value,
                        })
                      }
                      className="w-full border p-3 rounded-xl mb-4"
                    />

                    <div className="flex gap-4">
                      <button
                        onClick={updateDestination}
                        className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold"
                      >
                        Save Changes
                      </button>

                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-500 text-white px-6 py-3 rounded-xl font-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold mb-3">{item.name}</h2>

                    <p className="text-gray-500 mb-3">📍 {item.location}</p>

                    <p className="text-yellow-500 font-bold mb-3">
                      ⭐ {item.rating}
                    </p>

                    <p className="text-gray-700 leading-8">
                      {item.description}
                    </p>

                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => startEdit(item)}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteDestination(item._id)}
                        className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDestinations;
