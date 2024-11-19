"use client";

export const ClientComponent = ({ children }: any) => {
  console.log("Component client");
  return <div>Client {children}</div>;
};
