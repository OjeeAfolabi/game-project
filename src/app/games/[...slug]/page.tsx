import { games } from "@/data/games";
import React from "react";

const MainGamePage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;

  const [category, gameSlug] = slug;
  const game = games.find(
    (game) => game.category === category && game.slug === gameSlug
  );

  if (!game) {
    return <div>game Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={game.image}
          alt={game.title}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            {game.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainGamePage;
