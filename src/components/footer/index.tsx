import { GoArrowUpRight } from 'react-icons/go'

export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div
      className={` flex items-center justify-between py-4  ${
        isDarkMode ? ' border-default' : ' border-neutral-200'
      }  flex flex-col md:flex-row md:items-center md:justify-between py-8 text-sm border-t font-dm-sans  mt-24 `}
    >
      <p
        className={` mdMax:order-2 mdMax:mt-4 text-center ${
          isDarkMode ? ' text-gray' : ' text-dark-gray'
        }`}
      >
        © 2023 All rights reserved.
      </p>
      <div
        className={` mdMax:order-1 smMax:justify-between flex space-x-4 items-center mdMax:hidden ${
          isDarkMode ? ' text-gray' : ' text-dark-gray'
        }`}
      >
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1s-H_A80OQs9AbLoPKj2FNpU9qPAVB5uW/view"
          className="flex items-center space-x-1"
        >
          <span>Resume</span>
          <GoArrowUpRight />
        </a>
        <a
          href="mailto:ojotolani3@gmail.com"
          className="flex items-center space-x-1"
        >
          <span>Email</span>
          <GoArrowUpRight />
        </a>
        <a
          target="_blank"
          href="https://github.com/Blessing-Tolani"
          className="flex items-center space-x-1"
        >
          <span>Github</span>
          <GoArrowUpRight />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/blessing-tolani-ojo/"
          className="flex items-center space-x-1"
        >
          <span>Linkedin</span>
          <GoArrowUpRight />
        </a>
      </div>
    </div>
  )
}
