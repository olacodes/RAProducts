import { Box, HStack, Text, VStack } from "native-base"

const RightComponent = () => {

    return (
      <Box minW={200}>
        <Text bold fontSize="24" mb={5}> Fixtures </Text>
        <Text fontWeight={700} m={2} textTransform="uppercase">Package</Text>
        <VStack space={4}>
          <HStack
            justifyContent="space-between"
            px={2}
            py={1}
            borderColor="grey"
            borderWidth={1}
          >
            <Text>Premium</Text>
            <Text>$0</Text>
          </HStack>

          <HStack
            justifyContent="space-between"
            px={2}
            py={1}
            borderColor="#ddd"
            borderWidth={1}
            color="#ddd"
          >
            <Text color="inherit">Luxury</Text>
            <Text color="inherit">$0</Text>
          </HStack>
        </VStack>
      </Box>
    );
}

export default RightComponent;