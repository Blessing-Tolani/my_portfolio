import { GoArrowUpRight } from 'react-icons/go';

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between py-8 text-sm border-t font-dm-sans border-default mt-24 ">
      <p className="text-gray mdMax:order-2 mdMax:mt-4 text-center">
        © 2023 All rights reserved.
      </p>
      <div className="text-gray mdMax:order-1 flex space-x-4 items-center smMax:justify-between ">
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
  );
}
