import { FormControl, Select as ChakraSelect } from "@chakra-ui/react";
import React from "react";

export const Select = ({
  placeholder,
  value,
  onChange,
  children,
  ...props
}) => {
  return (
    <FormControl {...props}>
      <ChakraSelect value={value} onChange={onChange}>
        {children}
      </ChakraSelect>
    </FormControl>
  );
};
