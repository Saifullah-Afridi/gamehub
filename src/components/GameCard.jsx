import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ParentPlatformListIcon from "./ParentPlatformListIcon";
import CriticScore from "./CriticScore";

const GameCard = (props) => {
  console.log(props.game);
  return (
    <Card borderRadius={10} overflow={"hidden"} width="100%">
      <Image src={props.game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
        <HStack justifyContent="space-between">
          <ParentPlatformListIcon
            platforms={props.game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={props.game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
