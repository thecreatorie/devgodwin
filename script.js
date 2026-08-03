/* DEVGODWIN — interactions & cinematic canvas background */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- nav ---------- */
  var nav = document.getElementById("nav");
  var burger = document.getElementById("nav-burger");
  var links = document.getElementById("nav-links");
  var progressBar = document.getElementById("progress-bar");

  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- hero line fit: shrink any line that would clip ---------- */
  function fitHeroLines() {
    document.querySelectorAll(".hero-title .line").forEach(function (line) {
      var inner = line.querySelector(".reveal-line");
      if (!inner) return;
      inner.style.fontSize = "";
      var guard = 24;
      while (inner.scrollWidth > line.clientWidth && guard--) {
        var current = parseFloat(getComputedStyle(inner).fontSize);
        inner.style.fontSize = current * 0.96 + "px";
      }
    });
  }
  fitHeroLines();
  window.addEventListener("resize", fitHeroLines);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitHeroLines);
  }

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- background video (optional asset) ---------- */
  var video = document.getElementById("bg-video");
  video.addEventListener("canplay", function () {
    video.classList.add("playing");
  });
  video.addEventListener("error", function () {
    video.remove(); // no video asset — canvas aurora carries the scene
  }, true);

  /* ---------- canvas aurora background ---------- */
  var canvas = document.getElementById("bg-canvas");
  var ctx = canvas.getContext("2d");
  var W, H, blobs;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeBlobs() {
    var palette = [
      [200, 255, 62],   // signal green
      [50, 90, 220],    // deep blue
      [120, 60, 200],   // violet
      [20, 160, 140],   // teal
    ];
    blobs = palette.map(function (c, i) {
      return {
        color: c,
        r: Math.max(W, H) * (0.28 + i * 0.05),
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        alpha: i === 0 ? 0.05 : 0.09,
      };
    });
  }

  function frame() {
    ctx.fillStyle = "#05060a";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    blobs.forEach(function (b) {
      b.x += b.vx;
      b.y += b.vy;
      if (b.x < -b.r * 0.5 || b.x > W + b.r * 0.5) b.vx *= -1;
      if (b.y < -b.r * 0.5 || b.y > H + b.r * 0.5) b.vy *= -1;

      var g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, "rgba(" + b.color.join(",") + "," + b.alpha + ")");
      g.addColorStop(1, "rgba(" + b.color.join(",") + ",0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalCompositeOperation = "source-over";
    requestAnimationFrame(frame);
  }

  resize();
  makeBlobs();
  window.addEventListener("resize", function () {
    resize();
    makeBlobs();
  });

  if (prefersReducedMotion) {
    // paint a single static frame
    ctx.fillStyle = "#05060a";
    ctx.fillRect(0, 0, W, H);
    blobs.forEach(function (b) {
      var g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, "rgba(" + b.color.join(",") + "," + b.alpha + ")");
      g.addColorStop(1, "rgba(" + b.color.join(",") + ",0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    });
  } else {
    frame();
  }
})();
