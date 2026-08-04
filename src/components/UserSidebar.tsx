import Image from "next/image";
import { ImageSwitch } from "./ImageSwitch";
import { profile } from "@/data/profile";

type UserSidebarProps = {
    variant?: "v1" | "v2" | "v3";
};

export function UserSidebar({ variant = "v1" }: UserSidebarProps) {
    const showMetaLeft = variant !== "v2";
    const dotIsInline = variant === "v2";
    return (
        <div className="sidebar-user">
            <div className="wrap">
                <div className="user-image">
                    <div className="image">
      
                          {/* <Image
                           width={468}
                            height={856}
                            src="/assets/images/avatar/avatar.jpg"
                            alt="Avatar"
                             priority
                          /> */}
                      
                        <img
                            width={468}
                            height={856}
                            src="/assets/images/avatar/avatar.jpg"
                            alt="Avatar"

                        />
                    </div>
              
                    {showMetaLeft && (
                        <div className="meta-left d-none d-sm-block">
                            <div className="bg-item-svg">
                                <ImageSwitch
                                    light="/assets/images/item/vector-user.svg"
                                    dark="/assets/images/item/vector-user_dark.svg"
                                    width={32}
                                    height={227}
                                />
                            </div>
                            <p className="avaiable-dot vertical text-body-3 text-black-72 fw-medium">
                                <span className="text-vertical">
                                    Available for Work
                                </span>
                                <span className="dot" />
                            </p>
                        </div>
                    )}
                </div>
                <div className="user-logo d-none d-lg-block">
                    <ImageSwitch
                        light="/assets/images/logo/logo.svg"
                        dark="/assets/images/logo/logo-2.svg"
                        width={40}
                        height={40}
                    />
                </div>
                <ul className="tf-social-icon-2 user-social d-grid">
                    {profile.socials.map((s) => (
                        <li key={s.label}>
                            <a href={s.href} aria-label={s.label}>
                                <i className={`icon ${s.icon}`} />
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="user-info">
                    <p
                        className={
                            dotIsInline
                                ? "avaiable-dot text-body-3 text-white-72 fw-medium"
                                : "avaiable-dot text-body-3 fw-medium d-sm-none"
                        }
                    >
                        <span className="dot" />
                        <span>Available for Work</span>
                    </p>
                    <h5 className="greeting letter-space--2 text-white animationtext clip">
                        Hey, I’m{" "}
                        <span className="cd-words-wrapper">
                            {profile.rotatingNames.map((name, i) => (
                                <span
                                    key={name}
                                    className={`item-text ${i === 0 ? "is-visible" : "is-hidden"}`}
                                >
                                    {name}
                                </span>
                            ))}
                        </span>
                    </h5>
                    <p className="introduce text-white-56 letter-space--05 text-body-3">
                        {profile.introBio}
                    </p>
                    <div className="br-line" />
                    <div className="action-group">
                        <a href={`mailto:${profile.email}`} className="tf-btn-action">
                            <span className="ic-wrap">
                                <i className="icon icon-arrow-right-top" />
                            </span>
                            <span className="text text-body-3 letter-space--05 fw-medium">
                                Let’s talk
                            </span>
                            <span className="ic-wrap">
                                <i className="icon icon-arrow-right-top" />
                            </span>
                        </a>
                        <a href="#" className="action-down">
                            <i className="icon icon-download" />
                            <span className="text-body-3">Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
