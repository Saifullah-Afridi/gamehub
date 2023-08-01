import { Switch, HStack, useColorMode } from "@chakra-ui/react";
const ToggleSiteColor = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <label htmlFor="toggleColor">Change Theme</label>
      <Switch
        id="toggleColor"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
    </HStack>
  );
};

export default ToggleSiteColor;
