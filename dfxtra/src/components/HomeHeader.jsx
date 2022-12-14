import logo from './images/logo.svg';

const HomeHeader = () => {

  return (
    <div className="text-white bg-black-blue">
      <nav className="flex flex-row items-center justify-between px-10 py-4">
        <a href="/profile" className="navbar-brand">
          <img src={logo} alt="Digital Futures" width="80" />
        </a>
        <div className="flex flex-row items-center gap-2 sm:gap-8 text-right">
          <a href="/" className='text-sm sm:text-base pr-4'>
            Need help? Talk to us
          </a>
        </div>
      </nav>
    </div>





  );
}

export default HomeHeader;