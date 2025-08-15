import React from "react";
import { games } from "@/data/games";
import Link from "next/link";
const GamePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Explore Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <Link className="group relative bg-gray-900 p-5 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl" key={game.id} href={`/games/${game.category}/${game.slug}`}>
            <div className="relative">
              <img className="w-full h-52 object-cover rounded-lg group-hover:opacity-30 transition" src={game.image} alt={game.title} />
            </div>
            <div className="mt-4">
              <h2 className="font-semibold text-white text-lg">{game.title}</h2>
              <p className="text-gray-500">{game.description}</p>
              <p className="font-medium text-yellow-400">⭐{game.rating}/5</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
