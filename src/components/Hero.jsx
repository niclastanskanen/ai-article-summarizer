import React from 'react';

import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button 
          type="button"
          onClick={() => window.open('https://github.com/niclastanskanen/ai-article-summarizer', '_blank')} 
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize your articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Organize long articles into concise and clear summaries with Summize, an open-source article summarizer.
      </h2>
    </header>
  );
};

export default Hero;
