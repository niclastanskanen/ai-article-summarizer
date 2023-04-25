import { logo } from '../assets';
import { SignInButton, SignUpButton } from '@clerk/clerk-react';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <img src={logo} alt="clearyfiAi_logo" className="w-28 object-contain" />
      <div className="flex justify-end items-center">
        <SignUpButton mode="modal">
          <button className="btn rounded black_btn">Sign Up</button>
        </SignUpButton>
        <div className="ml-4">
          <SignInButton mode="modal">
            <button className="btn">Sign In</button>
          </SignInButton>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
