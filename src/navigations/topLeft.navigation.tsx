import { Stack, Center, Image, HStack, Box } from "native-base";
import { Pressable } from "react-native";
const shareIcon = require("../../assets/vector.svg");
const arrowBack = require("../../assets/arrow-back.svg");

const TopLeftNavigation = ({ navigation }: any) => {
  return (
    <Stack
      py={5}
      direction="row"
      justifyContent="space-between"
      alignItems="space-between"
    >
      <Center>
        {navigation.canGoBack() ? (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={{
                uri: arrowBack,
              }}
              size={5}
              alt="Go Back"
            />
          </Pressable>
        ) : null}
      </Center>
      <HStack>
        <Box
          borderColor="#ddd"
          borderWidth={1}
          mr={5}
          _text={{
            px: 4,
            py: 1,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: 10,
          }}
        >
          Gallery
        </Box>
        <Box
          borderColor="#ddd"
          borderWidth={1}
          mr={5}
          _text={{
            px: 4,
            py: 1,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: 10,
          }}
        >
          Unreal
        </Box>

        <Center>
          <Image
            source={{
              uri: shareIcon,
            }}
            size={2}
            mr={5}
            alt="share icon"
          />
        </Center>
      </HStack>
    </Stack>
  );
};

export default TopLeftNavigation;
