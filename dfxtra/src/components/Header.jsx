import logo from './images/logo.svg';

const Header = ({ profilePicture }) => {
    return (
        <div className="text-white bg-black-blue">
            <nav className="flex flex-row items-center justify-between px-10 py-4">
                <a href="/profile" className="navbar-brand">
                    <img src={logo} alt="Digital Futures" width="80" />
                </a>
                <div className="flex flex-row items-center gap-2 sm:gap-8 text-right">
                    <a href="/" className='text-sm sm:text-base'>
                        Need help? Talk to us
                    </a>
                    <a href="/" className='text-sm sm:text-base pr-4'>
                        Log out
                    </a>
                    <img
                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                        className="rounded-circle border border-dark border-3"
                        src={profilePicture}
                        alt='grad profile'
                    />
                </div>
            </nav>
        </div>
    );
}

export default Header;