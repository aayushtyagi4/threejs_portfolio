const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/aayushtyagi4">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 " />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/aayush-tyagi-b64677221/" >
          <div className="social-icon ">
            <img src="/assets/linkedin2.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </div>
        </a>

        <a href="https://leetcode.com/u/Aayushtyagi__/" >
          <div className="social-icon">
              <img src="/assets/leetcode2.svg" alt="leetcode" className="w-1/2 h-1/2" />
            </div>
        </a>

        <a href="https://www.naukri.com/code360/profile/35ec3464-0996-4fe8-95c9-80d55cd420d8">
          <div className="social-icon">
              <img src="/assets/codingninjas2.svg" alt="codingninjas" className="w-1/2 h-1/2" />
            </div>
        </a>
      </div>

      <p className="text-white-500">© 2024 Aayush Tyagi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;