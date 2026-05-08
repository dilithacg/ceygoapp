import React from "react";

const destinations = [
  {
    name: "Ella",
    image:
      "https://feelfreetravel.com/blog/wp-content/uploads/2024/02/Hero-9-arches-bridge-2048x1300-1.jpg",
  },
  {
    name: "Sigiriya",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/85/6b/um-palacio-no-topo-da.jpg?w=900&h=500&s=1",
  },
  {
    name: "Mirissa",
    image:
      "https://www.theglobetrottergp.com/wp-content/uploads/2019/05/oDZ1LpuSxCdJQd5UhbjSA_thumb_60bb.jpg",
  },
  {
    name: "Kandy",
    image:
      "https://faw-marketing.transforms.svdcdn.com/production/images/Temple-of-the-Tooth-in-Kandy.jpg?w=2600&h=1722&auto=compress%2Cformat&fit=crop&crop=focalpoint&fp-x=0.507&fp-y=0.4316&dm=1541511868&s=6f4458b5bfafc1e9a8e70d82f85379a7",
  },
];

const PopularDestinations = () => {
  return (
    <div className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-14">
        Popular Destinations
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">{place.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
