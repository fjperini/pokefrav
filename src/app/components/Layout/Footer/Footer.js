import React from "react";
import "./styles.css";
import { useGlobalState } from "../../../../state/globalState";
import imgFooterList from "../../../../assets/poke-closed.png";
import imgFooterDetail from "../../../../assets/poke-open.png";

import { Link } from "react-router-dom";
function Footer() {
  const fromPage = useGlobalState((state) => state.fromPage);
  const loadingFooter = useGlobalState((state) => state.loadingFooter);

  return (
    <div className="footer">
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <div class="icon">
          <img
            src={Number(fromPage) === 1 ? imgFooterList : imgFooterDetail}
            className={loadingFooter === true ? "logo-loading" : "logo"}
            alt="logo"
          />
        </div>
      </Link>
    </div>
  );
}

export default Footer;
