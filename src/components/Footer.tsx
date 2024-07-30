"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-main text-white">
      <div className="mx-auto w-full max-w-screen-xl overflow-x-hidden">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 border-b border-gray-100 border-opacity-10">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Navigate</h2>
            <ul className="font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Recipes
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Categories</h2>
            <ul className="font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Breakfast
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Lunch
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Dinner
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Desserts
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Snacks
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">
              Useful Links
            </h2>
            <ul className="font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Recipe Collections
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Meal Planning
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Cooking Tips
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Kitchen Equipment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="relative flex flex-col">
              <div className="relative">
                <Image
                  loading="lazy"
                  src="/logo.png" // Adjust the path if needed
                  alt="Footer Logo"
                  quality={70}
                  width={200}
                  height={10}
                />
                <p>123 Cooking Lane, Food City, FC 45678</p>
                <p>+123 456 7890</p>
                <p>info@recipeapp.com</p>
              </div>
              <div className="mt-8 flex">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Facebook.svg"
                    alt="Facebook"
                    className="w-6 h-6 mr-4"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Instagram.svg"
                    alt="Instagram"
                    className="w-6 h-6 mr-4"
                  />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-6 h-6 mr-4"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/Twitter.svg" alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 bg-main md:flex md:items-center md:justify-center">
          <div>
            <span className="text-sm sm:text-center">
              Copyright © 2024 Recipe App. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
