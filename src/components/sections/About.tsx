import { awards } from "@/data/awards";

export function About() {
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-user-circle" />
        About
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Building websites and <br className="d-none d-lg-block" />
        brands with clarity, creativity, <br className="d-none d-lg-block" />
        and full-stack speed
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        I&apos;m a versatile professional based in Las Vegas — a full-stack developer, <br className="d-none d-lg-block" />
        marketing director, and circus performer. My background spans medical <br className="d-none d-lg-block" />
        technology, corporations, startups, and B2B agencies. <br />
        <br />
        Recently I&apos;ve focused on short-term contracts through my own marketing <br className="d-none d-lg-block" />
        agency, as well as fintech and B2B technology clients — everything from <br className="d-none d-lg-block" />
        a 200-page fintech build to national pharmaceutical campaigns.
      </p>
      <ul className="award-list">
        {awards.map((a) => (
          <li className="award-item hover-cursor-img" key={a.name + a.year}>
            <div className="left">
              <h6 className="award_name letter-space--2 text-black-72">{a.name}</h6>
              <p className="award_desc text-black-56">{a.publisher}</p>
            </div>
            <h6 className="award_year text-black-72">{a.year}</h6>
            <div className="award_img hover-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" width={158} height={224} src={a.image} alt={a.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
