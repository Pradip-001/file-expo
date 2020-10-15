import React, { useState } from "react";

export function Folder({ name, children, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {name} {isOpen ? "-" : "+"}{" "}
      </button>
      {isOpen && children}
    </>
  );
}
