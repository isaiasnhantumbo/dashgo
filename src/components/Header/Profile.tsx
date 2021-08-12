import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Isaias Nhantumbo</Text>
        <Text color="gray.300" fontSize="small">
          isaiasjunior@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Isaias Junior"
        src="https://github.com/isaiasnhantumbo.png"
      />
    </Flex>
  );
}
