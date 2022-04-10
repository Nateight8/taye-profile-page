import React from "react";

function Section({ children, color }) {
  return (
    <section
      style={{ backgroundColor: `${color}` }}
      className="w-full relative "
    >
      {children}
    </section>
  );
}

export default Section;
