import React from 'react';
import { Box, Flex, Text, Badge } from '@chakra-ui/react';
import Avatar, { genConfig } from 'react-nice-avatar';

const PlayerListItem = ({ player, index }) => {
  const config = genConfig(player.name);
  return (
    <Flex p="2px">
      <Avatar style={{ width: '2rem', height: '2rem' }} {...config} />
      <Box ml="3">
        <Text fontWeight="bold" textColor={'white'}>
          {index + 1}. {player.name}
          {player.isAdmin && (
            <Badge ml="1" colorScheme="facebook">
              Admin
            </Badge>
          )}
        </Text>
      </Box>
      {/* <Box ml="auto" mr="10px">
        <Text>{role}</Text>
      </Box> */}
    </Flex>
  );
};

export default PlayerListItem;
