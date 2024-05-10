import Header from "@/components/Header";
import React from "react";

function Detelis({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div>
      <Header />
      <div>id {params.id}</div>
    </div>
  );
}

export default Detelis;
