import logo from './images/logo.svg';

const Header = () => {
    return (
        <div className="bg-black-blue">
            <nav className="navbar navbar-expand-sm">
                <a href="https://www.digitalfutures.com" className="navbar-brand" target="_blank" rel="noreferrer">
                    <img src={logo} alt="Digital Futures" width="300" />
                </a>
            </nav>
        </div>

    );
}

export default Header;