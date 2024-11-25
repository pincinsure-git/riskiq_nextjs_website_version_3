import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import FooterSection from "@/components/shared/FooterSection";
import SmoothScroll from "@/components/smoothscroll/SmoothScroll";
import NavbarComponent from "@/components/shared/NavbarComponent";
import MegaMenu from "@/components/shared/MegaMenu";

export default function App({ Component, pageProps }) {
  const openMenu = (e) => {
    e.preventDefault();
    document.body.classList.toggle("expand-menu");
  };

  const closeMenu = (e) => {
    e.preventDefault();
    document.body.classList.remove("expand-menu");
  };

  return (
    <>
      {/* <SmoothScroll> */}
      <NavbarComponent openMenu={openMenu} />
      <MegaMenu closeMenu={closeMenu} />
      <div id="riskiq-overlay-wrapper" onClick={closeMenu}>
        <div id="riskiq-overlay"></div>
      </div>
      <Component {...pageProps} />
      <FooterSection />
      {/* </SmoothScroll> */}
    </>
  );
}
