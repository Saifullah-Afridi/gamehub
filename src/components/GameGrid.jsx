import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "./hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
const GameGrid = ({ selectedGenre, selectedPlatform }) => {
  const { games, error, isLoading } = useGames(
    {
      params: { genres: selectedGenre?.id },
    },
    selectedGenre?.id
  );
  const {
    genres,
    error: genreError,
    isLoading: genreIsLoading,
  } = useGenres(
    {
      params: { platforms: selectedPlatform?.id },
    },
    selectedPlatform?.id
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} boxShadow="2xl"></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
