import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="bg-white shadow dark:bg-gray-900">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="h-8"
              alt="Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              React-Router
            </span>
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="#" class="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" class="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="contact" class="hover:underline me-4 md:me-6">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" class="hover:underline me-4 md:me-6">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <Link class="hover:underline">React-Router™</Link>. All Rights
          Reserved.
        </span>
          </div>
          <br />
    </footer>
  );
}
