import { Stack, Center, Image, HStack, Box, Text } from "native-base";
import { Pressable } from "react-native";
const groupIcon = require("../../assets/Group.svg");

const TopRightNavigation = ({ navigation }: any) => {
  return (
    <Stack py={5} direction="row" justifyContent="flex-end">
      <HStack>
        {" "}
        <Center mr={4}>

        <Text fontWeight={700}>Help</Text>
        </Center>
        <Center mr={4}>

        <Text fontWeight={700}>Settings</Text>
        </Center>
        <Image
          source={{
            uri: groupIcon,
          }}
          size={8}
          alt="Go Back"
        />
      </HStack>
    </Stack>
  );
};

export default TopRightNavigation;
