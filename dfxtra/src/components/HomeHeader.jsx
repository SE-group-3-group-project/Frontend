import logo from './images/logo.svg';
import {MDBCardImage} from 'mdb-react-ui-kit';
const HomeHeader = () => {
 
  return (
  <div className="text-white bg-black-blue">
      <nav className="flex flex-row items-center justify-between px-10 py-4">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Digital Futures" width="80" />
        </a>
        <div className="flex flex-row items-center gap-2 sm:gap-8 text-right">
            <a href="/" className='text-sm sm:text-base pr-4'>
            Need help? Talk to us
          </a>
          <div className="text-right">
          <div className="d-flex align-items-center mb-4">
          <div className="flex-shrink-0"> 
         <MDBCardImage
                      style={{ width: '50px' }}
                      className="img-fluid rounded-circle border border-dark border-3"
                      //src={profilePicture}
                      src="https://www.gstatic.com/webp/gallery/2.jpg"
                      //src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
                      alt='Generic placeholder image'
                      fluid /> 
           <a href="/login" className='text-sm sm:text-base pr-4'>
           Log out
          </a>
        </div>
        </div>
        </div>
        </div>
      </nav>
    </div>
    
    



  );
}

export default HomeHeader;