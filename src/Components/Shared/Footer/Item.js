import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-[#d4d4d4] hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
