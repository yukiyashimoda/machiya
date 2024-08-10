"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import Image from "next/image";
import LanguageSelect from "./components/LanguageSelect";
import Link from "next/link";
export default function Header10({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
   
      <div className="nav-logo-wrap local-scroll">
        <a href="/" className="logo font-alt">
          <Image
            src="/assets/images/demo-strong/machiya_yoko.png"
            alt="Your Company Logo"
            width={500}
            height={40}
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
          <Nav links={links} />
        </ul>
        <ul className="items-end clearlist local-scroll">
          {links[0].href.includes("/") ? (
            <li>
              <Link
                href="/contact"
                className="opacity-1 no-hover"
              >
                <span className="link-hover-anim" data-link-animate="y">
                  <span className="icon-ellipse me-1" /> 求人のお知らせ
                </span>
              </Link>
            </li>
          ) : (
            <li>
              <a href="#contact" className="opacity-1 no-hover">
                <span className="link-hover-anim" data-link-animate="y">
                  <span className="icon-ellipse me-1" /> 求人のお知らせ
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
