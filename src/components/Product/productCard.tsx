import { Box, Center, Image, Text } from "native-base";
const faucet = require("../../../assets/faucet.png");
const pencilIcon = require("../../../assets/pencil-square.svg");

const ProductCard = () => {
  return (
    <Box>
      <Box style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
        <Image source={{ uri: pencilIcon }} size={5} alt="pencilIcon" />
      </Box>
      <Center>
        <Image
          source={{
            uri: faucet,
          }}
          size={200}
          alt="imag"
        />

        <Text fontSize={25} fontWeight={700}>
          Brizo
        </Text>
        <Text color="grey" fontSize={20} fontWeight={300}>
          Two Handle Wall-Mount Faucet
        </Text>
      </Center>
    </Box>
  );
};

export default ProductCard;
