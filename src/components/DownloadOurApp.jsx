import React from 'react';
import mainImg from '../assets/main.png';
import googlePlayImg from '../assets/google-play.png';
import appStoreImg from '../assets/App-store.png';

const DownloadOurApp = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="p-6 flex flex-col md:flex-row justify-between bg-[#4dcfbb] rounded-xl m-6 items-center gap-6 shadow-lg">
        
        {/* Text Section */}
        <div className="flex flex-col max-w-lg">
          <h2 className="text-3xl font-bold text-[#14211C] mb-4">Download our app now</h2>
          <p className="text-lg text-gray-800">
            Ready to take control of your property management? Download the Hous App today and experience seamless management on the go.
          </p>
          {/* Download Links */}
          <div className="flex gap-5 mt-4">
            {/* Google Play */}
            <a 
              href="https://play.google.com/store/apps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition duration-300"
            >
              <img src={googlePlayImg} alt="Google Play Store" className="h-12" />
            </a>
            {/* App Store */}
            <a 
              href="https://www.apple.com/app-store/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition duration-300"
            >
              <img src={appStoreImg} alt="Apple App Store" className="h-12" />
            </a>
          </div>
        </div>
        
        {/* Image Section */}
        <img 
          src={mainImg} 
          alt="Download Our App" 
          className="w-full max-w-md md:max-w-lg object-cover rounded-lg shadow-md" 
        />
      </div>
    </section>
  );
};

export default DownloadOurApp;
