// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          <svg 
          version="1.1" 
          width="50px" 
          height="50px" 
          viewBox="0 0 32 32"
          fill="#ffffff"
        >
          <style>{`
            .stone_eeen {
              fill: #ffffff;
              animation: pulse 1.5s ease-in-out infinite;
            }
            @keyframes pulse {
              0%, 100% { 
                transform: translateX(0) scale(1);
                opacity: 1;
              }
              50% { 
                transform: translateX(2px) scale(1.05);
                opacity: 0.9;
              }
            }
          `}</style>
          <path 
            className="stone_eeen" 
            d="M15,8c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S19.418,8,15,8z M31.295,18.793 c0.391,0.391,0.391,1.024,0,1.414L29.002,22.5c-0.195,0.195-0.512,0.195-0.707,0l0,0c-0.195-0.195-0.195-0.512,0-0.707L30.088,20H28 c-1.657,0-3-1.343-3-3v-1c0-5.741-4.862-10.367-10.685-9.977C9.006,6.379,5,11.032,5,16.353L5,17c0,1.657-1.343,3-3,3H0.5 C0.224,20,0,19.776,0,19.5v0C0,19.224,0.224,19,0.5,19H2c1.105,0,2-0.895,2-2v-1C4,9.856,9.037,4.889,15.206,5.002 C21.262,5.113,26,10.312,26,16.369v0.516C26,18.11,26.895,19,28,19h2.088l-1.793-1.793c-0.195-0.195-0.195-0.512,0-0.707l0,0 c0.195-0.195,0.512-0.195,0.707,0L31.295,18.793z"
          ></path>
        </svg>
            <h3 className="text-xl font-semibold mb-4">RoboTech Industries</h3>
            <p className="text-gray-400">Precision. Efficiency. Innovation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="text-gray-400">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form>
              <input type="email" placeholder="Your email" className="w-full p-2 rounded-lg mb-2" />
              <button type="submit" className="bg-primary hover:bg-primary/50 text-white font-semibold py-2 px-6 rounded-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;