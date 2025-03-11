import React from 'react';

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-brand-orange"
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative h-full flex flex-col">
        {/* Animated Hello Text */}
        <div className="w-full pt-8 md:pt-16">
          <div className="breathe-animation">
            <span>HELLO</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Buttons Container - Positioned in center for desktop, bottom for mobile */}
          <div className="w-full flex flex-col items-center gap-6 mt-auto md:mt-0 mb-8 md:mb-0">
            {/* X Logo Button */}
            <a 
              href="https://x.com/LukaGrunt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[250px] h-[60px] md:h-[80px] bg-black rounded-[15px] flex items-center justify-center transform hover:scale-110 transition-transform duration-200 shadow-custom"
            >
              <img 
                src="/x-logo.png"
                alt="X Logo"
                className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] object-contain"
              />
            </a>

            {/* A Secret Button */}
            <button 
              className="w-[250px] h-[60px] md:h-[80px] bg-brand-blue rounded-[15px] text-white font-bold text-[24px] md:text-[30px] transform hover:scale-110 transition-transform duration-200 shadow-custom"
            >
              A SECRET
            </button>

            {/* Soon Button */}
            <button 
              className="w-[250px] h-[60px] md:h-[80px] bg-brand-red rounded-[15px] text-white font-bold text-[24px] md:text-[30px] transform hover:scale-110 transition-transform duration-200 shadow-custom"
            >
              SOON...
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="w-full pb-4 md:pb-8">
          <h2 className="text-white text-[24px] md:text-[35px] font-bold text-center px-4">
            TOOLS FOR THE CROWD, BROUGHT TO LIFE!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;