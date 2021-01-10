import React from "react";
import "./legals.scss";

const Legals = () => {
  return (
    <div className="contentPrivacy">
      <div className="privacy-policy">
        <h2>Tindev Privat Policy</h2>
        <p>Last updated: November 05, 2020</p>
        <p>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of your information when you use the
          Service and tells you about your privacy rights and how the law
          protects you.
        </p>
        <p>
          We don't store your data. Swingify is a tool and does not use your
          personal data.
        </p>
      </div>
      <div className="links">
        <h2>Links to Other Websites</h2>
        <p>
          Our Service may contain links to other websites that are not operated
          by Us. If you click on a third party link, you will be directed to
          that third party's site. We strongly advise you to review the Privacy
          Policy of every site you visit. We have no control over and assume no
          responsibility for the content, privacy policies or practices of any
          third party sites or services.
        </p>
      </div>
      <div className="changes">
        <h2>Changes to this Privacy Policy</h2>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
      </div>
    </div>
  );
};

export default Legals;
