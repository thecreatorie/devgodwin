import { ImageSwitch } from "@/components/ImageSwitch";

export function Footer() {
  return (
    <div id="footer" className="tf-footer flat-spacing">
      <div className="block-quote effectFade fadeUp no-div">
        <h5 className="quote-text font-3 fw-normal text-black-72">
          <span className="text-black-56">“</span>
          Design is not just what it looks like and feels like. Design is how it works.
          <span className="text-black-56">“</span>
        </h5>
        <p className="quote-author font-3 text-black-56 h6 text-end">Steve Jobs</p>
      </div>
      <div className="br-line" />
      <div className="foot-inner">
        <div className="isak effectFade fadeUp no-div">
          <svg viewBox="0 0 700 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text
              x="0"
              y="132"
              fontSize="152"
              fontWeight="600"
              letterSpacing="-0.02em"
              textLength="700"
              lengthAdjust="spacingAndGlyphs"
              fill="black"
              fillOpacity="0.72"
            >
              CAROLINE
            </text>
          </svg>
        </div>
        <a href="#" className="f-logo effectFade fadeZoom">
          <div className="logo">
            <ImageSwitch
              light="/assets/images/logo/logo.svg"
              dark="/assets/images/logo/logo-2.svg"
              width={32}
              height={32}
            />
          </div>
        </a>
      </div>
      <div className="foot-bottom">
        <p className="text-nocopy text-black-56 effectFade fadeUp no-div">
          All rights reserved <br />© 2026 The Creatorie
        </p>
        <div className="isak effectFade fadeUp no-div">
          <svg viewBox="0 0 700 162" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text
              x="0"
              y="130"
              fontSize="140"
              fontWeight="600"
              letterSpacing="0.02em"
              textLength="700"
              lengthAdjust="spacingAndGlyphs"
              fill="none"
              stroke="black"
              strokeOpacity="0.56"
            >
              CREATORIE
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
