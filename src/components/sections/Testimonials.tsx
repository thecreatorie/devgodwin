"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

export function Testimonials() {
  const [thumbSwiper, setThumbSwiper] = useState<SwiperClass | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);

  return (
    <div id="testimonial" className="section-testimonial flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-tes" />
        Testimonials
      </div>
      <div className="heading overflow-hidden">
        <div className="head-left">
          <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
            What clients say <br className="d-none d-lg-block" />
            about the work
          </h4>
          <p className="s-desc text-black-56 scrolling-effect effectTop">
            Five-star reviews for MDM Design Studio, styled as social <br className="d-none d-lg-block" />
            content over the studio&apos;s own project photography.
          </p>
        </div>

        <Swiper
          modules={[Controller]}
          className="swiper sw-main-image effectFade fadeRight no-div"
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides
          watchSlidesProgress
          onSwiper={setThumbSwiper}
          controller={{ control: mainSwiper ?? undefined }}
          dir="ltr"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.authorName}>
              <div className="head-image">
                <div className="wrap-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image loading="lazy" width={236} height={297} src={t.image} alt={t.authorName} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-testimonial_wrap effectFade fadeUp no-div">
        <Swiper
          modules={[Controller, Navigation, Pagination]}
          className="swiper tf-swiper swiper-testimonial"
          slidesPerView={1}
          onSwiper={setMainSwiper}
          controller={{ control: thumbSwiper ?? undefined }}
          navigation={{ nextEl: ".sw-nav-next", prevEl: ".sw-nav-prev" }}
          pagination={{ el: ".number-pagination", type: "fraction" }}
          dir="ltr"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.authorName}>
              <div className="testimonial-v01">
                <div className="tes-icon">
                  <i className="icon icon-quote" />
                </div>
                <h5 className="tes-text letter-space--2 text-black-72">{t.text}</h5>
                <div className="tes-author">
                  <p className="author_name fw-medium text-black-72">{t.authorName}</p>
                  <p className="text-body-3 text-black-56">{t.authorRole}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="number-pagination" />
        <div className="group-btn">
          <div className="sw-nav sw-nav-prev link">
            <i className="icon icon-arrow-caret-left" />
          </div>
          <div className="sw-nav sw-nav-next link">
            <i className="icon icon-arrow-caret-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
