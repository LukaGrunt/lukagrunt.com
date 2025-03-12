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

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 translate-y-[160px] md:translate-y-[160px] translate-y-[100px]">
        {/* All Buttons - Stacked on mobile, row on desktop */}
        <div className="flex flex-col gap-8 items-center justify-center">
          {/* Top Buttons - Always in column on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* A Secret Button */}
            <button 
              className="w-[250px] h-[100px] rounded-[15px] text-white font-bold text-[30px] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#5F89B0' }}
            >
              A SECRET
            </button>

            {/* Soon Button */}
            <button 
              className="w-[250px] h-[100px] rounded-[15px] text-white font-bold text-[30px] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
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
              className="w-[250px] h-[100px] bg-black/80 backdrop-blur-sm rounded-[15px] flex items-center justify-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-white text-5xl font-bold">X</span>
            </a>
          </div>
        </div>

        {/* Bottom Text - Split into two lines on mobile */}
        <div className="mt-12 text-center">
          <p className="text-3xl md:text-4xl font-bold text-white flex flex-col md:block">
            <span className="block md:inline">TOOLS FOR THE CROWD,</span>
            <span className="block md:inline mt-2 md:mt-0 md:ml-2">BROUGHT TO LIFE!</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;