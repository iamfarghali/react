import {
  Book,
  CheckCircle,
  Clipboard,
  Code2,
  Star,
  StarHalf,
  TrendingUp,
} from 'lucide-react';
import { content } from '../data';
import { useTheme } from '../contexts/ThemeContext';

import snipptLight from '../assets/code-snippt-light.png';
import snipptDark from '../assets/code-snippt-dark.png';
import { useLang } from '../contexts/LangContext';

function Hero() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const heading = content.hero.heading[lang].split(' ');

  return (
    <div className="relative min-h-screen w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 pt-20 pb-10 grid gap-12 grid-cols-1 md:grid-cols-2 md:items-center">
        {/* Left|Top Side */}
        <div className="relative flex flex-col gap-6">
          {/* Background decoration */}
          <div
            className="-z-999 absolute -top-1/2 -left-1/2 w-100 h-100 rounded-full 
              bg-gradient-to-tl from-accent-50 via-accent-100 to-accent-200 opacity-25 blur-2xl"
          ></div>

          {/* Box 1 */}
          <div className="flex items-center gap-2">
            <span className="text-xs bg-accent-50 text-theme-800 uppercase px-2 py-[2px] rounded-4xl">
              {content.hero.newLabel[lang]}
            </span>

            <p className="flex items-center gap-2 text-xs font-medium border border-theme-600 shadow-theme-950 bg-theme-950 text-theme-50 px-3 py-1 rounded-4xl capitalize">
              <TrendingUp className="w-4 h-4" />
              {content.hero.subHeading[lang]}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black capitalize tracking-tight text-theme-900 ">
              <span className="flex">{heading[0]}</span>{' '}
              <span className="bg-gradient-to-r from-theme-600 via-theme-700 to-theme-600 bg-clip-text text-transparent">
                {`${heading[1]} ${heading[2]}`}
              </span>
            </h1>

            <p className="text-background-600 px-2">
              {content.hero.description[lang]}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-25 h-[1px] bg-background-100 "></div>
              <span className="uppercase text-xs text-background-400">
                Transation Seamlessly
              </span>
            </div>
            <div className="flex items-center gap-4 px-2">
              <button className="flex items-center gap-2 text-sm font-medium bg-background-950 text-background-50 capitalize px-4 py-2 rounded-lg cursor-pointer hover:bg-background-800 duration-300">
                <Code2 className="w-5 h-5" />
                {content.hero.ctaBtn[lang]}
              </button>

              <button className="flex items-center gap-2 text-sm font-medium text-background-700 border border-background-300 capitalize px-4 py-2 rounded-lg cursor-pointer hover:bg-background-200 duration-300">
                <Book className="w-5 h-5" />
                {content.hero.docsBtn[lang]}
              </button>
            </div>
            <div className="w-full h-[1px] bg-background-100"></div>

            <div className="flex items-center gap-6">
              <div className="flex items-center -space-x-4">
                <div className="w-10 aspect-square rounded-full bg-background-600"></div>
                <div className="w-10 aspect-square rounded-full bg-background-500"></div>
                <div className="w-10 aspect-square rounded-full bg-background-300"></div>
                <div className="w-10 aspect-square rounded-full bg-background-900"></div>
              </div>

              <div className="flex flex-col gap-1">
                {/* Stars */}
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-theme-500 text-theme-50" />
                    <Star className="w-5 h-5 fill-theme-500 text-theme-50" />
                    <Star className="w-5 h-5 fill-theme-500 text-theme-50" />
                    <Star className="w-5 h-5 fill-theme-500 text-theme-50" />
                    <StarHalf className="w-5 h-5 fill-theme-500 text-theme-50" />
                  </div>
                  <span className="text-background-500 font-semibold text-sm">
                    4.8/5
                  </span>
                </div>

                <p className="text-background-600 text-sm">
                  {content.hero.trustedBy[lang]}
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

              <span className="text-xs text-background-400">
                dark-theme.jsx
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={theme.includes('dark') ? snipptDark : snipptLight}
                alt="Code Snippt"
                className="object-center"
              />
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-2 text-xs bg-theme-950 text-theme-50 px-3 py-1 rounded-4xl">
                  Tailwind v4
                </span>
                <span className="flex items-center gap-2 text-xs bg-theme-950 text-theme-50 px-3 py-1 rounded-4xl">
                  React
                </span>
              </div>

              <button className="flex items-center justify-center p-2 bg-theme-100 rounded-full">
                <Clipboard className="w-3 h-3 text-theme-950" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="hidden md:block">
        <span className="absolute top-10 right-1/8 flex items-center gap-2 text-xs font-medium bg-accent-800 text-accent-50 px-2 py-1 rounded-lg capitalize">
          <CheckCircle className="w-4 h-4" />
          {content.hero.accessibleLabel[lang]}
        </span>

        <span className="absolute bottom-10 left-2 flex items-center gap-2 text-xs font-medium bg-accent-800 text-accent-50 px-2 py-1 rounded-lg capitalize">
          <CheckCircle className="w-4 h-4" />
          {content.hero.responsiveLabel[lang]}
        </span>
      </div>
    </div>
  );
}

export default Hero;
