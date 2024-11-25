import Link from "next/link";
import React from "react";
import { Accordion, Button, Image } from "react-bootstrap";

export default function MegaMenu({ closeMenu }) {
  return (
    <div className="main-menu">
      <div className="main-menu-content">
        <div className="py-2 px-4">
          <Image src="/images/logo.svg" alt="Logo" width={80} />
          <div className="riskiq-sidebar-close" onClick={closeMenu}></div>
        </div>
        <div className="py-3 px-4">
          <ul className="ps-1 mt-4 mm-li">
            <li>
              <span onClick={closeMenu}>
                <Link href="/">Home</Link>
              </span>
            </li>
            <li>
              <span onClick={closeMenu}>
                <Link href="/about-us">About Us</Link>
              </span>
            </li>
            <li>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Insurance Products</Accordion.Header>
                  <Accordion.Body className="pb-0">
                    <ul className="ps-1 mt-4 mm-li">
                      <li>
                        <span onClick={closeMenu}>
                          <Link href="/insurance-products/life-insurance">
                            Life insurance
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span onClick={closeMenu}>
                          <Link href="/insurance-products/health-insurance">
                            Health insurance
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span onClick={closeMenu}>
                          <Link
                            href="/insurance-products/general-insurance"
                            className="mb-0"
                          >
                            General insurance
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <span onClick={closeMenu}>
                <Link href="/partners">Partners</Link>
              </span>
            </li>
            <li>
              <span onClick={closeMenu}>
                <Link href="/career">Career</Link>
              </span>
            </li>
            <li>
              <span onClick={closeMenu}>
                <Link href="/contact-us">Contact us</Link>
              </span>
            </li>
            <li>
              <span onClick={closeMenu}>
                <Link href="/becomeapos">Become a pos</Link>
              </span>
            </li>
            <li>
              <span onClick={closeMenu}>
                <Button className="theme-btn">LOGIN</Button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
