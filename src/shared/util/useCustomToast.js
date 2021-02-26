import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();

  const toastInfo = (title, message) =>
    toast({
      title: title,
      description: message,
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  const toastError = (title, message) =>
    toast({
      title: title,
      description: message,
      status: "error",
      duration: 9000,
      isClosable: true,
    });

  return { toastError, toastInfo };
};
