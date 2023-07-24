import { IoMailOutline } from 'react-icons/io5';
import { GoArrowUpRight } from 'react-icons/go';
import { Modal, Slide } from '@mui/material';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

export default function Header() {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);

  return (
    <div className="flex items-center justify-between py-4 bg-[#161616] font-dm-sans text-sm border-b border-default mdMax:z-50 mdMax:sticky mdMax:-top-1">
      <a
        className="flex items-center space-x-4"
        href="mailto:ojotolani3@gmail.com"
      >
        <span className="rounded-full p-3 md:p-5  md:text-xl text-gray border border-default ">
          <IoMailOutline />
        </span>
        <span className="text-gray">Get in touch</span>
      </a>
      <div className="text-gray flex space-x-4 items-center mdMax:hidden">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1s-H_A80OQs9AbLoPKj2FNpU9qPAVB5uW/view"
          className="flex items-center space-x-1 group"
        >
          <span>Resume</span>
          <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
        </a>
        <a
          target="_blank"
          href="https://github.com/Blessing-Tolani"
          className="flex items-center space-x-1 group"
        >
          <span>Github</span>
          <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/blessing-tolani-ojo/"
          className="flex items-center space-x-1 group"
        >
          <span>Linkedin</span>
          <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
        </a>
      </div>

      <button
        onClick={() => toggleMobileMenu(true)}
        className="text-primary h-6 w-6 md:hidden outline-none"
      >
        <svg
          id="Component_18_1"
          data-name="Component 18 – 1"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 34.547 34.547"
        >
          <path
            id="Path_68077"
            data-name="Path 68077"
            d="M0,0H34.547V34.547H0Z"
            fill="none"
          />
          <path
            id="Path_68078"
            data-name="Path 68078"
            d="M21.713,24.153v2.879H5.879V24.153Zm7.2-10.076v2.879H3V14.076ZM26.031,4V6.879H10.2V4Z"
            transform="translate(1.318 1.758)"
            fill="#A1A1A1"
          />
        </svg>

        <span className="sr-only">open menu</span>
      </button>

      {/* Mobile Menu Slider*/}
      <Modal open={isMobileMenuOpen ? true : false} hideBackdrop={true}>
        <Slide
          in={isMobileMenuOpen ? true : false}
          timeout={700}
          direction="down"
          className=" bg-[rgba(0,0,0,0.8)] h-screen outline-none"
        >
          <div>
            <div className="h-[4.44rem] px-5 bg-dark-gray  flex  border-b border-[#4f4f4f] justify-between items-center ">
              <div className="round-ball"></div>
              <div className="flex items-center space-x-4">
                <button
                  className="text-gray outline-none"
                  onClick={() => toggleMobileMenu(false)}
                >
                  <MdOutlineClose size={28} />
                  <span className="sr-only">close menu</span>
                </button>
              </div>
            </div>
            <div className=" text-sm flex text-gray flex-col items-center rounded-b-3xl bg-dark-gray">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1s-H_A80OQs9AbLoPKj2FNpU9qPAVB5uW/view"
                className="flex items-center font-medium space-x-1 py-6 group"
              >
                <span>Resume</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
              <a
                target="_blank"
                href="https://github.com/Blessing-Tolani"
                className="flex font-medium  items-center space-x-1 py-6 group"
              >
                <span>Github</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/blessing-tolani-ojo/"
                className="flex font-medium  items-center space-x-1 py-6 group"
              >
                <span>Linkedin</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
            </div>
          </div>
        </Slide>
      </Modal>
    </div>
  );
}
