import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="h-8"
              alt=" Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              React-Router
            </span>
          </Link>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="tel:5541251234"
              class="text-sm  text-gray-500 dark:text-white hover:underline">
              +91 9876543210
            </Link>
            <Link
              to="#"
              class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500 dark:text-white "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500 dark:text-white "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500 dark:text-white "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500 dark:text-white "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }>
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
