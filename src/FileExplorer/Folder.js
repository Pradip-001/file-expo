import React, { useState } from "react";
import { Button } from "@chakra-ui/core";
export function Folder({ name, children, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {name} {isOpen ? "-" : "+"}{" "}
      </Button>
      {isOpen && children}
    </>
  );
}
