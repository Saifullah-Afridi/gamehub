import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "./hooks/usePlatform";

const PlatformSelector = ({ onSelectedPlatform }) => {
  const { platform, error, isLoading } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marignY={1}>
        Platform
      </MenuButton>
      <MenuList>
        {platform.map((item) => (
          <MenuItem onClick={() => onSelectedPlatform(item)} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
