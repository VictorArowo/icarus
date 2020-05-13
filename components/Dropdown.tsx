import { useState } from "react";
import Transition from "./Transition";

interface Props {
  disabled?: boolean;
}

const Dropdown: React.FC<Props> = ({ disabled = false }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    !disabled && setActive(!active);
  };

  return (
    <div>
      <div className="relative inline-block text-left" onClick={handleClick}>
        <div>
          <span className="rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            >
              Options
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>

        <Transition
          show={active}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg">
            <div className="bg-white rounded-md shadow-xs">
              <div className="py-1">
                <a
                  href="/"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                >
                  Account settings
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                >
                  Support
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                >
                  License
                </a>
                <form method="POST" action="#">
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Dropdown;
