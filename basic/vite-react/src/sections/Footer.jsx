const Footer = () => {
    return (
      <footer className="bg-gray-999 text-white py-4">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center flex-wrap gap-5">
          {/* Terms & Privacy */}
          <div className="text-sm flex gap-3 text-gray-400">
            <p>Terms & Conditions</p>
            <span>|</span>
            <p>Privacy Policy</p>
          </div>
  
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://github.com/TafadzwaTG" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/assets/github.svg" alt="github" className="w-6 h-6 hover:scale-110 transition-all" />
            </a>
            <a href="https://www.instagram.com/tg_norman?igsh=NjFxZnp0NGRpY3ph&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6 hover:scale-110 transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/tafadzwa-muzamindo-996268124/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/assets/linkedin (2).svg" alt="instagram" className="w-6 h-6 hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-3">
          <p>© 2025 Tafadzwa TG Muzamindo. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  