import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaCaretDown } from 'react-icons/fa'; 
import dropimage from "../assets/dropimage.png"; 
import logo from '../assets/logoblack.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Manage which dropdown is active on mobile
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index); // Toggle dropdown
  };

  const navItems = [
    {
      path: '/about',
      label: 'About',
      dropdown: [
        { path: '/about/company', label: 'About Company' },
        { path: '/about/mission', label: 'Mission' },
        { path: '/about/client-reviews', label: 'Client Reviews' },
        { path: '/about/faq', label: 'FAQ' },
        { path: '/about/careers', label: 'Careers' },
        { path: '/about/become-our-agent', label: 'Become Our Agent' },
      ],
    },
    {
      path: '/service',
      label: 'Services',
      dropdown: [
        { path: '/service/software-development', label: 'Software Development' },
        { path: '/service/ui-ux-design', label: 'UI/UX Design' },
        { path: '/service/digital-marketing', label: 'Digital Marketing' },
        { path: '/service/mobile-app-development', label: 'Mobile App Development' },
        { path: '/service/devops-consulting', label: 'DevOps Consulting' },
        { path: '/service/mvp-development', label: 'MVP Development' },
        { path: '/service/testing-and-qa', label: 'Testing and QA' },
        { path: '/service/ecommerce', label: 'e-Commerce' },
        { path: '/service/low-code-no-code', label: 'Low Code - No Code' },
        { path: '/service/web-development', label: 'Web Development' },
        { path: '/service/saas-products', label: 'SaaS Products' },
        { path: '/service/all-services', label: 'See All Services' },
      ],
    },
    { path: '/industry', label: 'Industries' },
    { path: '/solution', label: 'Solutions' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contactus', label: 'Contact Us' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white ">
        {/* Top section with contact info */}
        <div className="hidden md:block bg-purple-950 text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2 text-sm">
              <div className="flex items-center space-x-4">
                <a href="mailto:contact@markletech.com" className="hover:text-blue-600">
                  contact@markletech.com
                </a>
                <span className="hidden lg:inline">|</span>
                <span className="hidden lg:inline">IN: +91-7982 332 070</span>
                <span className="hidden lg:inline">|</span>
                <span className="hidden lg:inline">USA: +1-628 277 4060</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-pink-600">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-600">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-600">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-red-600">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <NavLink to='/'><img src={logo} alt="Logo" className="h-12 w-auto" /></NavLink>
              </div>

              {/* Burger menu button for mobile */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>

              {/* Desktop navigation */}
              <div className="hidden md:flex items-center">
                {navItems.map((item, index) => (
                  <div key={item.path} className="relative group font-semibold text-md">
                    {/* Main nav item */}
                    {item.dropdown ? (
                      <div className="relative" ref={dropdownRef}>
                        <NavLink
                          to={item.path}
                          className="relative px-3 py-2 transition-colors duration-200 text-gray-700 hover:text-blue-600 flex items-center"
                        >
                          {item.label}
                          <FaCaretDown className="ml-1" />
                        </NavLink>

                        {/* Dropdown menu on hover */}
                        <div className="absolute top-[1.5rem] mt-2 bg-white border border-gray-200 shadow-xl rounded-3xl z-10 p-6 w-[1000px] hidden group-hover:flex">
                          {/* <img src={dropimage} alt="Dropdown Graphic" className="w-24 h-24 mr-4" /> */}
                          <div className="grid grid-cols-2 gap-8">
                            {item.dropdown.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              >
                                {subItem.label}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `relative px-3 py-2 transition-colors duration-200 ${
                            isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-2 space-y-2 bg-white`}>
              {navItems.map((item, index) => (
                <div key={item.path}>
                  {/* Main mobile nav item */}
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 transition-colors duration-200 ${
                        isActive ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>

                  {/* Dropdown for mobile view */}
                  {item.dropdown && (
                    <div className="pl-4 space-y-2">
                      <div className="relative">
                        <button
                          className="flex items-center justify-between w-full py-2"
                          onClick={() => handleDropdownClick(index)}
                        >
                          <img src={dropimage} alt="Dropdown Graphic" className="w-12 h-12 mr-2" />
                          <span className="text-gray-700 hover:text-blue-600">{item.label}</span>
                          <FaCaretDown className="ml-1" />
                        </button>

                        {/* Dropdown menu for mobile */}
                        {activeDropdown === index && (
                          <div className="mt-2 bg-white border border-gray-200 shadow-xl rounded-3xl z-10 p-4">
                            {item.dropdown.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                onClick={() => setIsOpen(false)} // Close menu on click
                              >
                                {subItem.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blinking download message */}
        <p className="text-center blinking py-4">Don't Wait! Download The Specific Modules Marketing Deck Today! Download Now!</p>
      </nav>

      {/* Add padding to the top of the content to prevent overlap */}
      <div className="pt-[100px]">
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default Navbar;
