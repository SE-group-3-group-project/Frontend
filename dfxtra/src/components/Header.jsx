import logo from './images/logo.svg';
import home from './images/home.svg';

const Header = () => {
    return (
        <div className="text-white bg-black-blue">
            <nav className="flex flex-row items-center justify-between px-10 py-4">
                <a href="https://www.digitalfutures.com" className="navbar-brand" target="_blank" rel="noreferrer">
                    <img src={logo} alt="Digital Futures" width="80" />
                </a>
                <div className="flex flex-row items-center gap-2 sm:gap-8 text-right">
                    <a href="/" className='text-sm sm:text-base'>
                        Need help? Talk to us
                    </a>
                    <a href="/">
                        <img src={home} alt="Digital Futures" />
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Header;