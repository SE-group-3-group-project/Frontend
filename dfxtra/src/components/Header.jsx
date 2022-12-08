import logo from './images/logo.svg';

const Header = () => {
 return (
    <div className="text-white bg-black-blue">
    <nav className="navbar navbar-expand-sm">
 <a href="https://www.digitalfutures.com" className="navbar-brand" target="_blank" rel="noreferrer">
   <img src={logo} alt="Digital Futures" width="300" />
 </a>
 <div class="col-2 text-right">
  <a href="/" className="navbar-brand">
         Need help? Talk to us Menu
        </a>
</div>

</nav>
 </div>
  );
}

export default Header;