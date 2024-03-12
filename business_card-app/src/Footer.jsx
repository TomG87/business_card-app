import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <FaXTwitter size="35px" />
      <FaFacebookSquare size="35px" />
      <FaInstagram size="35px" />
      <FaGithubSquare size="37px" />
    </div>
  );
}
