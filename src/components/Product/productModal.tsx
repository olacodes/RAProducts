import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Center,
  Divider,
  CheckCircleIcon,
  CircleIcon,
  Flex,
} from "native-base";

const faucet = require("../../../assets/faucet.png");
const detailImage = require("../../../assets/image.png");

const ProductModal = () => {
  return (
    <Flex m={3} direction="row">
      {/* Left Side */}
      <VStack maxW={200}>
        <Text bold fontSize={10} textTransform="uppercase" mb={3}>
          Bathroom Faucet
        </Text>

        <VStack>
          <Text bold mb={2}>
            Premium
          </Text>
          <Box borderWidth={1} borderColor="grey">
            <CheckCircleIcon p={1} color="black" />
            <Center mx={3}>
              <Image source={{ uri: faucet }} size="120" alt="faucet" />
            </Center>
          </Box>
        </VStack>
      </VStack>
      {/* Divider */}
      <Divider orientation="vertical" color="#eee" mx="10"></Divider>
      {/* Right Side */}

      <VStack flex={1}>
        <HStack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Text bold fontSize={24}>
            Brizo
          </Text>
          <Text bold>$0 (Included)</Text>
        </HStack>
        <Text color="black" fontSize={18} fontWeight={300}>
          Two Handle Wall-Mount Faucet
        </Text>

        <VStack width={300} my={7}>
          <Flex direction="row" justifyContent="space-between">
            <Text fontWeight={100}>Flow Rate</Text>
            <Text>1.5 GPM</Text>
          </Flex>
        </VStack>

        {/* Divider */}
        <Divider />

        {/* Description */}
        <Text fontWeight={100} my={7}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio.
        </Text>

        <Image
          source={{
            uri: detailImage,
          }}
            // size="xl"
          width={10000}
          height={200}
          alt="detailed"
        />
      </VStack>
    </Flex>
  );
};

export default ProductModal;
