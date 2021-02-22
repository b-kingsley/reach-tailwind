import React from "react";
// import logo from './logo.svg';
// import "./App.css";

import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";

function App() {
  return (
    <Menu>
      <MenuButton className="text-sm p-2 border border-gray-200 m-4 shadow-sm hover:shadow-lg rounded-sm hover:bg-blue-100 text-blue-500 hover:text-blue-700">
        <div className="flex">
          <span className="mr-2">Actions</span>
          <svg
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </MenuButton>
      <MenuList className="p-0 w-48 border border-blue-100 rounded-sm">
        <MenuItem
          className="text-blue-500 p-2 m-0 hover:bg-blue-100 hover:text-blue-700 border-b"
          onSelect={() => {
            console.log(`Selected`);
          }}
        >
          Download
        </MenuItem>
        <MenuItem
          className="text-blue-500 p-2 m-0 hover:bg-blue-100 hover:text-gray-400 hover:text-blue-700"
          onSelect={() => {}}
        >
          Contact
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default App;
