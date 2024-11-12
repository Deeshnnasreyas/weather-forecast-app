import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "Paris",
    },
    {
      id: 2,
      name: "Toronto",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "London",
    },
    {
      id: 5,
      name: "Sydney",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-orange-500  hover:scale-95 px-3 py-2 bg-yellow-500 transition ease-in rounded-lg"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
