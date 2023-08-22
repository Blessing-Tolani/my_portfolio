import Projects from 'components/projects'
import Header from '../header'
import { PiHandWavingThin } from 'react-icons/pi'
import Footer from 'components/footer'
import { useState } from 'react'

export default function HomePage() {
  const [isDarkMode, toggleDarkMode] = useState(true)

  return (
    <section
      className={` px-5 md:px-12 bg-white ${
        isDarkMode ? 'dark:bg-primary-dark' : ''
      }  w-full xl:px-32 text-white relative `}
    >
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={() => toggleDarkMode(!isDarkMode)}
      />
      <div className="py-10">
        <h1 className="font-playfair text-gray text-lg flex items-center space-x-2">
          <span>HELLO</span> <PiHandWavingThin />
        </h1>
        <p className="text-4xl md:text-5xl leading-tight text-gray mt-4 md:w-10/12 xl:w-3/4 font-dm-sans ">
          I'm Blessing,{' '}
          <span
            className={`${
              isDarkMode ? 'dark:text-white' : 'text-primary-dark'
            } font-playfair italic`}
          >
            A Frontend Engineer
          </span>{' '}
          <span>
            with specialty in building{' '}
            <span
              className={`${
                isDarkMode ? 'dark:text-white' : 'text-primary-dark'
              } font-playfair italic`}
            >
              websites
            </span>{' '}
            and{' '}
            <span
              className={`${
                isDarkMode ? 'dark:text-white' : 'text-primary-dark'
              } font-playfair italic`}
            >
              web applications
            </span>
          </span>
        </p>
      </div>
      <div className="flex w-full justify-between my-5 relative ">
        <div className="round-ball sticky top-5 z-50 mt-5 lgMax:hidden"></div>
        <Projects isDarkMode={isDarkMode} />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </section>
  )
}
