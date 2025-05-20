import {
  Book,
  CheckCircle,
  Clipboard,
  Code2,
  Star,
  StarHalf,
  TrendingUp,
} from 'lucide-react';

import snipptLight from '../assets/code-snippt-light.png';
import snipptDark from '../assets/code-snippt-dark.png';

import Highlighted from './Highlighted';
import Line from './Line';
import T from './T';

import { useLang } from '../contexts/LangContext';
import { useTheme } from '../contexts/ThemeContext';

function Hero() {
  const { theme } = useTheme();
  const { lang } = useLang();

  return (
    <div className="relative min-h-screen w-full">
      <div className="container mx-auto px-2 sm:px-6 md:px-12 pt-25 pb-10 grid gap-12 grid-cols-1 md:grid-cols-2 md:items-center">
        {/* Left|Top Side */}
        <div className="relative flex flex-col gap-6">
          {/* Background decoration */}
          <div
            className={`-z-999 absolute -top-50 
              ${lang === 'ar' ? '-right-50' : '-left-50'} 
              w-100 h-100 rounded-full 
              bg-gradient-to-tl from-accent-50 via-accent-100 to-accent-200 opacity-25 blur-2xl`}
          ></div>

          {/* Box 1 */}
          <div className="flex flex-col items-start md:flex-row md:items-center gap-2">
            <span className="text-sm bg-accent-100 text-theme-900 uppercase px-2 py-[2px] rounded-4xl">
              <T k="new" />
            </span>
            <p className="flex items-center gap-1 sm:gap-2 text-sm font-medium border border-theme-600 shadow-theme-950 bg-theme-950 text-theme-50 px-3 py-1 rounded-4xl capitalize">
              <TrendingUp className="w-4 h-4" />
              <T k="heroSubHeading" />
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold capitalize text-theme-900">
              <T k="heroHeading" components={{ Highlight: Highlighted }} />
            </h1>

            <p className="text-background-700 text-lg sm:text-xl">
              <T k="heroDescription" />
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Line className="w-25 h-[1px]" />
              <span className="uppercase text-sm sm:text-base text-background-500">
                <T k="transitionSeamlessly" />
              </span>
            </div>

            <div className="flex flex-row items-center gap-2 md:gap-4 px-1 md:px-2">
              <button
                aria-label="Let's start coding"
                className="flex items-center gap-2 
                  text-base sm:text-lg font-semibold text-nowrap
                  bg-theme-950 text-theme-50 
                  border border-transparent capitalize 
                  px-4 py-2 rounded-lg cursor-pointer hover:bg-theme-700 duration-300"
              >
                <Code2 className="w-5 h-5" />
                <T k="ctaBtn" />
              </button>

              <button
                aria-label="Read documentation"
                className="flex items-center gap-2
                 text-base sm:text-lg font-semibold text-nowrap
                text-background-700 border border-background-300 capitalize px-4 py-2 
                rounded-lg cursor-pointer hover:bg-background-200 duration-300"
              >
                <Book className="w-5 h-5" />
                <T k="docsBtn" />
              </button>
            </div>
            <Line className="w-full h-[1px]" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              {/* Client images */}
              <div className="flex items-center -space-x-4">
                <div className="w-10 aspect-square rounded-full bg-background-600"></div>
                <div className="w-10 aspect-square rounded-full bg-background-500"></div>
                <div className="w-10 aspect-square rounded-full bg-background-300"></div>
                <div className="w-10 aspect-square rounded-full bg-background-900"></div>
              </div>

              <div className="flex flex-col gap-1">
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  <div className="flex items-center mb-[2px]">
                    {lang === 'ar' && (
                      <StarHalf className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    )}
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    {lang === 'en' && (
                      <StarHalf className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    )}
                  </div>
                  <span className="text-background-700 font-medium text-base">
                    4.8/5
                  </span>
                </div>

                <p className="text-background-700 text-base sm:text-lg">
                  <T
                    k="heroTrustedBy"
                    components={{ Highlight: Highlighted }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right|Bottom Side */}
        <div className="px-1 relative">
          <div
            className="absolute -inset-1 rounded-xl 
            bg-gradient-to-br from-accent-50 via-accent-100 to-accent-300 opacity-25 blur-2xl"
          ></div>
          <div className="relative max-h-[380px] flex flex-col gap-4 bg-background-100 px-4 py-4 rounded-xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-1">
                <span className="w-3 aspect-square bg-red-400 rounded-full"></span>
                <span className="w-3 aspect-square bg-yellow-400 rounded-full"></span>
                <span className="w-3 aspect-square bg-green-400 rounded-full"></span>
              </div>

              <span className="text-sm text-background-400">
                dark-theme.jsx
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={theme.includes('dark') ? snipptDark : snipptLight}
                alt={`${lang === 'en' ? 'Code Snippt' : 'مثال من الكود'}`}
                className="object-center"
              />
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-2 text-sm bg-theme-950 text-theme-50 px-3 py-1 rounded-4xl">
                  Tailwind v4
                </span>
                <span className="flex items-center gap-2 text-sm bg-theme-950 text-theme-50 px-3 py-1 rounded-4xl">
                  React
                </span>
              </div>

              <button
                aria-label="Clipboard Icon"
                className="flex items-center justify-center p-2 bg-theme-100 rounded-full"
              >
                <Clipboard className="w-4 h-4 text-theme-950" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className=" hidden md:block">
        <span
          className={`absolute top-5 
            ${lang === 'ar' ? 'left-1/5' : 'right-1/5'} 
            flex items-center gap-2 text-sm font-medium bg-accent-800 text-accent-50 px-2 py-1 rounded-lg capitalize`}
        >
          <CheckCircle className="w-4 h-4" />
          <T k="accessible" />
        </span>

        <span
          className={`absolute bottom-5 
            ${lang === 'ar' ? 'right-2' : ' left-2'} 
            flex items-center gap-2 text-sm font-medium bg-accent-800 text-accent-50 px-2 py-1 rounded-lg capitalize`}
        >
          <CheckCircle className="w-4 h-4" />
          <T k="responsive" />
        </span>
      </div>
    </div>
  );
}

export default Hero;
