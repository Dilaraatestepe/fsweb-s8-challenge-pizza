import { Button } from "reactstrap";
import "../styles/homepage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function HomePage() {
  document.body.className = "homepage-body";

  const history = useHistory();

  function aciktim() {
    history.push("/order");
  }

  return (
    <>
      <section className="main-page-section">
        <img
          src="../../images/iteration-1-images/logo.svg"
          className="main-logo"
        />
        <h2 className="main-h2">
          <span>KOD</span> <span className="qw"> ACIKTIRIR</span>
        </h2>
        <h2 className="main-h2">
          <span>PİZZA, </span> <span className="qw">DOYURUR</span>
        </h2>
        <Button
          data-cy="aciktim-button"
          type="button"
          className="button-aciktim"
          onClick={aciktim}
        >
          ACIKTIM
        </Button>
      </section>
      <div className="nav-menu">
        <img src="../../images/iteration-2-images/icons/1.svg" alt="" />
        <span className="nav-menu-item">YENİ! Kore</span>
        <img src="../../Assets/iteration-2-images/icons/2.svg" alt="" />
        <span className="nav-menu-item">Pizza</span>
        <img src="../../Assets/iteration-2-images/icons/3.svg" alt="" />
        <span className="nav-menu-item">Burger</span>
        <img src="../../Assets/iteration-2-images/icons/4.svg" alt="" />
        <span className="nav-menu-item">Kızartmalar</span>
        <img src="../../Assets/iteration-2-images/icons/5.svg" alt="" />
        <span className="nav-menu-item">Fast Food</span>
        <img src="../../Assets/iteration-2-images/icons/6.svg" alt="" />
        <span className="nav-menu-item">Gazlı içecekler</span>
      </div>

      <NavBar />
      <Footer />
    </>
  );
}
