import React from 'react';
// File taken from gt-bootcamp activity 04 of MVD. 

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ children }) {
  return <div className={`container py-3 mt-3`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ Port, children }) {

  return <div className={`row${Port ? " row-cols-1 row-cols-md-2" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <main
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </main>
  );
}