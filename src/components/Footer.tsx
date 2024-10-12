import logo from '../assets/logo.svg';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-center">© 2024 Straw Hat Coders</p>
        <div className="logo-container">
          <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <mask id="circle-mask">
              <circle cx="50" cy="50" r="40" fill="white" />
            </mask>
            <image id="my-logo" x="0" y="0" width="100" height="100" href={logo} mask="url(#circle-mask)" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;