import { Button } from "@chakra-ui/react";

export const PaginationButton = ({
  content,
  changePage,
  disabled,
  ...props
}) => {
  return (
    <Button
      size="lg"
      variant="ghost"
      disabled={disabled}
      onClick={changePage}
      {...props}
    >
      {content}
    </Button>
  );
};
