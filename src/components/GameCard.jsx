import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ParentPlatformListIcon from "./ParentPlatformListIcon";

const GameCard = (props) => {
  console.log(props.game);
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={props.game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
        <ParentPlatformListIcon
          platforms={props.game.parent_platforms.map((p) => p.platform)}
        ></ParentPlatformListIcon>
      </CardBody>
    </Card>
  );
};

export default GameCard;
