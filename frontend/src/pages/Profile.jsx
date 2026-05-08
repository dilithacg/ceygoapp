import React from "react";
import { User, Map, Wallet, Heart, Hotel } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10">
        {/* Sidebar */}
        <div className="bg-white rounded-3xl shadow-xl p-8 h-fit">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="profile"
              className="w-32 h-32 rounded-full mx-auto mb-5"
            />

            <h2 className="text-3xl font-bold">Dilitha</h2>

            <p className="text-gray-500">Travel Enthusiast</p>
          </div>

          <div className="mt-10 space-y-5">
            <button className="w-full flex items-center gap-3 bg-blue-600 text-white p-4 rounded-xl">
              <User />
              Profile
            </button>

            <button className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-gray-100">
              <Map />
              Saved Trips
            </button>

            <button className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-gray-100">
              <Hotel />
              Bookings
            </button>

            <button className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-gray-100">
              <Wallet />
              Budgets
            </button>

            <button className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-gray-100">
              <Heart />
              Favorites
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-gray-500 mb-3">Trips Planned</h2>

              <p className="text-5xl font-bold text-blue-600">12</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-gray-500 mb-3">Bookings</h2>

              <p className="text-5xl font-bold text-blue-600">5</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-gray-500 mb-3">Favorites</h2>

              <p className="text-5xl font-bold text-blue-600">18</p>
            </div>
          </div>

          {/* Recent Trips */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8">Recent Trips</h2>

            <div className="space-y-5">
              <div className="border rounded-2xl p-5 flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Ella Adventure</h3>

                  <p className="text-gray-500">3 Days Trip</p>
                </div>

                <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
                  View
                </button>
              </div>

              <div className="border rounded-2xl p-5 flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Kandy Cultural Tour</h3>

                  <p className="text-gray-500">2 Days Trip</p>
                </div>

                <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
