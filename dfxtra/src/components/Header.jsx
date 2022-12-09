import logo from './images/logo.svg';

const Header = () => {
  return (
    <div className="text-white bg-black-blue">
      <nav className="flex flex-row items-center justify-between px-10 py-4">
        <a href="https://www.digitalfutures.com" className="navbar-brand" target="_blank" rel="noreferrer">
          <img src={logo} alt="Digital Futures" width="80" />
        </a>
        <div className="text-right">
          <a href="/" className='text-sm sm:text-base pr-4'>
            Need help? Talk to us
          </a>
          <a href="/" className='text-sm sm:text-base'>
            Menu
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;