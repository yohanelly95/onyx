import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  const LinkMailto = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <LinkMailto label="Contact us" mailto="mailto:hrishikesh@onyx.sh" />
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
