import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <List>
      {genres.map((gen) => (
        <ListItem key={gen.id} paddingY="10px">
          <HStack>
            <Image boxSize="32px" src={gen.image_background} />
            <Text fontSize="lg">{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
