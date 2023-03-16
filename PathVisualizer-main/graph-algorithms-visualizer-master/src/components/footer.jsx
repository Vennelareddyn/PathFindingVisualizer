import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made with Love by &copy;Vennela{" "}
         
          <a target = "_blank" href="https://www.linkedin.com/in/nallamilli-vennela-satya-reddy-6ba052219/">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
