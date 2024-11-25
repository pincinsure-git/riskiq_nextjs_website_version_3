import React, { memo } from "react";
import { useRouter } from "next/router";
import {
  Image,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about-us", label: "ABOUT US" },
  { href: "/partners", label: "PARTNERS" },
  { href: "/career", label: "CAREER" },
  { href: "/contact-us", label: "CONTACT US" },
];

const insuranceProducts = [
  { href: "/insurance-products/life-insurance", label: "Life Insurance" },
  { href: "/insurance-products/health-insurance", label: "Health Insurance" },
  { href: "/insurance-products/general-insurance", label: "General Insurance" },
];

function NavbarComponent({ openMenu }) {
  const router = useRouter();
  const isInsuranceProductActive = insuranceProducts.some(
    ({ href }) => router.pathname === href,
  );
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/images/logo.svg" alt="Logo" />
        </Navbar.Brand>
        <div className="menu-container d-flex d-lg-none" onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 d-flex align-items-center navbar-scroll">
            {navLinks.slice(0, 2).map(({ href, label }) => (
              <Nav.Link
                key={href}
                href={href}
                className={router.pathname === href ? "active" : ""}
              >
                {label}
              </Nav.Link>
            ))}
            <NavDropdown
              title={
                <span>
                  INSURANCE PRODUCTS{" "}
                  <span className="sub-arrow ms-2">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L7 7.5L13 1.5"
                        stroke="#103F04"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              }
              id="navbarScrollingDropdown"
              className={isInsuranceProductActive ? "active" : ""}
            >
              {insuranceProducts.map(({ href, label }) => (
                <NavDropdown.Item key={href} href={href}>
                  {label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {navLinks.slice(2).map(({ href, label }) => (
              <Nav.Link
                key={href}
                href={href}
                className={router.pathname === href ? "active" : ""}
              >
                {label}
              </Nav.Link>
            ))}

            <Nav.Link
              href="/becomeapos"
              className={`become-pos-link ${router.pathname === "/becomeapos" ? "active" : ""}`}
            >
              BECOME A POS
            </Nav.Link>
            <Nav.Link href="#action2">
              <Button className="theme-btn">LOGIN</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(NavbarComponent);
