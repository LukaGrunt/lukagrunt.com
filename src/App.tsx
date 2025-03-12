import React from 'react';

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.imgur.com/2M61KHQ.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-start pt-20 md:justify-center md:pt-0 px-4 md:translate-y-[160px]">
        {/* All Buttons - Stacked on mobile, row on desktop */}
        <div className="flex flex-col gap-6 md:gap-8 items-center justify-center">
          {/* Top Buttons - Always in column on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
            {/* A Secret Button */}
            <button 
              className="w-[200px] md:w-[250px] h-[80px] md:h-[100px] rounded-[15px] text-white font-bold text-[24px] md:text-[30px] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#5F89B0' }}
            >
              A SECRET
            </button>

            {/* Soon Button */}
            <button 
              className="w-[200px] md:w-[250px] h-[80px] md:h-[100px] rounded-[15px] text-white font-bold text-[24px] md:text-[30px] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#B1413C' }}
            >
              SOON...
            </button>
          </div>

          {/* X Button - Centered */}
          <div>
            <a 
              href="https://x.com/LukaGrunt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[200px] md:w-[250px] h-[80px] md:h-[100px] bg-black/80 backdrop-blur-sm rounded-[15px] flex items-center justify-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-white text-4xl md:text-5xl font-bold">X</span>
            </a>
          </div>
        </div>

        {/* Bottom Text - Split into two lines on mobile */}
        <div className="mt-8 md:mt-12 text-center w-full">
          <div className="md:hidden text-2xl font-bold text-white space-y-2">
            <div>TOOLS FOR THE CROWD,</div>
            <div>BROUGHT TO LIFE!</div>
          </div>
          <div className="hidden md:block text-4xl font-bold text-white">
            TOOLS FOR THE CROWD, BROUGHT TO LIFE!
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;