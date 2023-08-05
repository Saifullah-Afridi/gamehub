import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";

const GenreList = ({ SelectedGenre, onSelectedGenre }) => {
  const { genres, error, isLoading } = useGenres();
  // if (isLoading) return <Spinner />;
  if (isLoading)
    return (
      <Card height="100%">
        <CardBody>
          <SkeletonText
            noOfLines={10}
            skeletonHeight={3}
            spacing={10}
          ></SkeletonText>
        </CardBody>
      </Card>
    );
  return (
    <List>
      {genres.map((gen) => (
        <ListItem key={gen.id} paddingY="10px">
          <HStack>
            <Image boxSize="32px" src={gen.image_background} />
            <Button
              fontWeight={gen.id === SelectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => onSelectedGenre(gen)}
            >
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
