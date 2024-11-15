import { useState } from "react";
import { AiFillSetting, AiOutlineGithub } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";

function Settings(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleDarkMode = () => {
    props.darkness(!props.dark);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <AiFillSetting
        onClick={toggleMenu}
        className="text-black dark:text-white cursor-pointer"
        size={24}
      />
      {menuOpen && (
        <div className="absolute top-8 right-0 bg-white dark:bg-gray-800 shadow-md rounded p-4 w-40">
          <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <input
              type="checkbox"
              checked={props.dark}
              onChange={handleToggleDarkMode}
              className="cursor-pointer"
            />
            <span>Dark mode</span>
          </label>
          <hr className="my-2 border-gray-300 dark:border-gray-700" />
          <div className="flex justify-around pt-2">
            <a href="https://github.com/iaraetchart/spellsy" target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub size={24} className="text-gray-600 dark:text-gray-300" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;