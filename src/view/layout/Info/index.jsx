import { Heading, Stack, Text } from "@chakra-ui/react";

export const Info = ({ title, message, children, ...props }) => {
  return (
    <Stack textAlign="center" {...props}>
      <Heading as="h3" size="lg">
        {title}
      </Heading>

      <Text pt={4}>{message}</Text>
      {children}
    </Stack>
  );
};
