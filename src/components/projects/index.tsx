import Awardies from 'assets/images/awardies.png'
import Airbnb from 'assets/images/airbnb-clone.png'
import Cubes from 'assets/images/cubes.png'
import BMWedding from 'assets/images/bm-wedding.png'
import SMA from 'assets/images/sma.png'
import Recipe from 'assets/images/recipe.png'
import Wakapadi from 'assets/images/wakapadi.png'
import { GoArrowUpRight } from 'react-icons/go'

export default function Projects({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section className="w-full lg:w-10/12 xl:w-3/4">
      <h1
        className={`${
          isDarkMode
            ? 'bg-primary-dark text-gray'
            : 'bg-white text-primary-dark'
        } font-playfair  text-lg md:sticky md:-top-1 py-5 bg-[#161616] md:z-50  `}
      >
        WORK
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lgMax:justify-between md:gap-5 w-full">
        <div
          className={`${
            isDarkMode
              ? 'bg-dark-gray'
              : 'bg-neutral-100 shadow-lg text-primary-dark'
          }  rounded-xl p-8  `}
        >
          <div
            className="h-[18rem] md:h-[16rem] rounded-xl w-full"
            style={{
              backgroundImage: `url(${Airbnb})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>
          <div>
            <div className="flex items-center justify-between font-dm-sans py-3">
              <p className="font-bold">Airbnb Clone</p>
              <a
                target="_blank"
                href="https://vacation-lodges.netlify.app/"
                className={`${
                  isDarkMode ? '' : 'font-medium '
                }  flex items-center text-sm text-gray space-x-1 group `}
              >
                <span>View project</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
            </div>
            <p
              className={`${
                isDarkMode ? 'text-white' : ' text-primary-dark'
              }  text-sm  font-medium `}
            >
              React + Typescript + Material UI + Tailwind
            </p>
          </div>
        </div>
        <div
          className={`${
            isDarkMode
              ? 'bg-dark-gray'
              : 'bg-neutral-100 shadow-lg text-primary-dark'
          }  rounded-xl p-8  `}
        >
          <div
            className="h-[18rem] md:h-[16rem] rounded-xl w-full"
            style={{
              backgroundImage: `url(${Wakapadi})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <div className="flex items-center justify-between font-dm-sans py-3">
              <p className="font-bold">Wakapadi</p>
              <a
                target="_blank"
                href="https://wakapadi.io/"
                className={`${
                  isDarkMode ? '' : 'font-medium '
                }  flex items-center text-sm text-gray space-x-1 group `}
              >
                <span>View project</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
            </div>
            <p
              className={`${
                isDarkMode ? 'text-white' : ' text-primary-dark'
              }  text-sm  font-medium `}
            >
              React + Typescript + Material UI + Tailwind
            </p>
          </div>
        </div>
        <div
          className={`${
            isDarkMode
              ? 'bg-dark-gray'
              : 'bg-neutral-100 shadow-lg text-primary-dark'
          }  rounded-xl p-8  `}
        >
          <div
            className="h-[18rem] md:h-[16rem] rounded-xl w-full"
            style={{
              backgroundImage: `url(${SMA})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <div className="flex items-center justify-between font-dm-sans py-3">
              <p className="font-bold">SMA Impact Network</p>
              <a
                target="_blank"
                href="https://smaimpactnetwork.netlify.app/"
                className={`${
                  isDarkMode ? '' : 'font-medium '
                }  flex items-center text-sm text-gray space-x-1 group `}
              >
                <span>View project</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
            </div>
            <p
              className={`${
                isDarkMode ? 'text-white' : ' text-primary-dark'
              }  text-sm  font-medium `}
            >
              NextJS + GSAP Animations + Tailwind
            </p>
          </div>
        </div>
        <div
          className={`${
            isDarkMode
              ? 'bg-dark-gray'
              : 'bg-neutral-100 shadow-lg text-primary-dark'
          }  rounded-xl p-8  `}
        >
          <div
            className="h-[18rem] md:h-[16rem] rounded-xl w-full"
            style={{
              backgroundImage: `url(${BMWedding})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <div className="flex items-center justify-between font-dm-sans py-3">
              <p className="font-bold">TheBMWedding</p>
              <a
                target="_blank"
                href="https://thebmwedding.netlify.app/"
                className={`${
                  isDarkMode ? '' : 'font-medium '
                }  flex items-center text-sm text-gray space-x-1 group `}
              >
                <span>View project</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
            </div>
            <p
              className={`${
                isDarkMode ? 'text-white' : ' text-primary-dark'
              }  text-sm  font-medium `}
            >
              NextJS + Tailwind + GSAP + Headless UI
            </p>
          </div>
        </div>
        <div
          className={`${
            isDarkMode
              ? 'bg-dark-gray'
              : 'bg-neutral-100 shadow-lg text-primary-dark'
          }  rounded-xl p-8  `}
        >
          <div
            className="h-[18rem] md:h-[16rem] rounded-xl w-full"
            style={{
              backgroundImage: `url(${Awardies})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <div className="flex items-center justify-between font-dm-sans py-3">
              <p className="font-bold">Awardies</p>
              <a
                target="_blank"
                href="https://awardies.netlify.app/"
                className={`${
                  isDarkMode ? '' : 'font-medium '
                }  flex items-center text-sm text-gray space-x-1 group `}
              >
                <span>View project</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
            </div>
            <p
              className={`${
                isDarkMode ? 'text-white' : ' text-primary-dark'
              }  text-sm  font-medium `}
            >
              NextJS + Tailwind
            </p>
          </div>
        </div>
        <div
          className={`${
            isDarkMode
              ? 'bg-dark-gray'
              : 'bg-neutral-100 shadow-lg text-primary-dark'
          }  rounded-xl p-8  `}
        >
          <div
            className="h-[18rem] md:h-[16rem] rounded-xl w-full"
            style={{
              backgroundImage: `url(${Recipe})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <div className="flex items-center justify-between font-dm-sans py-3">
              <p className="font-bold">Recipe Villa</p>
              <a
                target="_blank"
                href="https://getarecipe.netlify.app/"
                className={`${
                  isDarkMode ? '' : 'font-medium '
                }  flex items-center text-sm text-gray space-x-1 group `}
              >
                <span>View project</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
            </div>
            <p
              className={`${
                isDarkMode ? 'text-white' : ' text-primary-dark'
              }  text-sm  font-medium `}
            >
              Javascript + SCSS + GSAP Animations
            </p>
          </div>
        </div>
        <div
          className={`${
            isDarkMode
              ? 'bg-dark-gray'
              : 'bg-neutral-100 shadow-lg text-primary-dark'
          }  rounded-xl p-8  `}
        >
          <div
            className="h-[16rem] rounded-xl w-full"
            style={{
              backgroundImage: `url(${Cubes})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <div className="flex items-center justify-between font-dm-sans py-3">
              <p className="font-bold">Cubes</p>
              <a
                target="_blank"
                href="https://pvcubes.netlify.app/"
                className={`${
                  isDarkMode ? '' : 'font-medium '
                }  flex items-center text-sm text-gray space-x-1 group `}
              >
                <span>View project</span>
                <GoArrowUpRight className="translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
              </a>
            </div>
            <p
              className={`${
                isDarkMode ? 'text-white' : ' text-primary-dark'
              }  text-sm  font-medium `}
            >
              Javascript + SCSS + CSS Animations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
