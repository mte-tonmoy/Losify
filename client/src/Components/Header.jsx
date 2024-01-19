import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  CubeTransparentIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
    navigate("/");
  };
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-[90vw] md:px-24 lg:px-8 rounded-full my-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <CubeTransparentIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            LOSIFY
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "default"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary" : "default"
              }
            >
              About us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary" : "default"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/item"
              className={({ isActive }) =>
                isActive ? "text-primary" : "default"
              }
            >
              Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage"
              className={({ isActive }) =>
                isActive ? "text-primary" : "default"
              }
            >
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/request"
              className={({ isActive }) =>
                isActive ? "text-primary" : "default"
              }
            >
              Requested Items
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/login" className={"btn btn-primary text-white"}>
                Login
              </NavLink>
            </li>
          )}
          <div className="">
            {user && (
              <div
                className="w-10 rounded-full tooltip tooltip-left"
                data-tip={user.displayName}
              >
                <img className="w-10 rounded-full" src={user.photoURL} />
              </div>
            )}
          </div>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <CubeTransparentIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        LOSIFY
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to="/item"
                        className={({ isActive }) =>
                          isActive
                            ? "text-primary"
                            : "default font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        }
                      >
                        Items
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/manage"
                        className={({ isActive }) =>
                          isActive
                            ? "text-primary"
                            : "default font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        }
                      >
                        Manage Items
                      </NavLink>
                    </li>
                    {user ? (
                      <>
                        <li>
                          <button onClick={handleLogOut}>Log Out</button>
                        </li>
                      </>
                    ) : (
                      <li>
                        <NavLink
                          to="/login"
                          className={"btn btn-primary text-white"}
                        >
                          Login
                        </NavLink>
                      </li>
                    )}
                    <div className="">
                      {user && (
                        <div
                          className="w-10 rounded-full tooltip tooltip-left"
                          data-tip={user.displayName}
                        >
                          <img
                            className="w-10 rounded-full"
                            src={user.photoURL}
                          />
                        </div>
                      )}
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
