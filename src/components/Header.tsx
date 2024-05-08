import React from "react";

function Header() {
  return (
    <div className="bg-gray-100  py-10">
      <div className="container mx-auto flex justify-between px-12">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <p className="font-medium cursor-pointer">Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
