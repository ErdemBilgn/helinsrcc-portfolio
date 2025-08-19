import CTA from "./CTA";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import ME from "/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Merhaba, Ben</h5>
        <h1>Helin Deniz SARAÇ</h1>
        <h5 className="text-light">Yüksek İç Mimar / Peyzaj Mimarı</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Aşağı Kaydırınız
        </a>
      </div>
    </header>
  );
};

export default Header;
