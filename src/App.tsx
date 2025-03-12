import React from 'react';

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.imgur.com/2M61KHQ.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 translate-y-20">
        {/* X Button - Centered */}
        <div className="mb-12">
          <a 
            href="https://x.com/LukaGrunt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[250px] h-[100px] bg-black/80 backdrop-blur-sm rounded-[15px] flex items-center justify-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="text-white text-5xl font-bold">X</span>
          </a>
        </div>

        {/* Other Buttons - In a row */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
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

        {/* Bottom Text */}
        <div className="mt-20 text-center">
          <p className="text-2xl md:text-4xl font-bold text-white">
            TOOLS FOR THE CROWD, BROUGHT TO LIFE!
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;