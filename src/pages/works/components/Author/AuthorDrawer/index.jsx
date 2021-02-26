import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";

export const AuthorDrawer = ({ author, isOpen, onClose }) => {
  const { name, fuller_name, bio, birth_date, death_date } = author;

  return (
    <Drawer placement="bottom" size="lg" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <IconButton ml="auto" icon={<CloseIcon />} onClick={onClose} />
          </DrawerHeader>

          <DrawerBody mb={8}>
            <Box maxW="80ch" mx="auto">
              <Heading as="div" textAlign="center" mb={1} fontSize="xl">
                {fuller_name ? fuller_name : name}
              </Heading>

              <Box fontWeight="medium" textAlign="center" mb={4}>
                {birth_date} - {death_date ?? ""}
              </Box>

              <Text>{bio && bio.value}</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
