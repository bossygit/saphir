(function () {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    var isNarrow = window.matchMedia("(max-width: 1023px)").matches;
    var revealDuration = isNarrow ? 0.55 : 0.7;
    var revealY = isNarrow ? 24 : 36;

    function initNav() {
        var nav = document.querySelector("nav");
        if (!nav) return;
        gsap.from(nav, {
            y: -16,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.out",
        });
    }

    function initHomeHero() {
        var inner = document.querySelector(".hero-inner");
        if (!inner) return;
        var children = inner.children;
        if (!children.length) return;
        gsap.from(children, {
            y: revealY,
            autoAlpha: 0,
            duration: revealDuration,
            stagger: isNarrow ? 0.08 : 0.12,
            ease: "power3.out",
            delay: 0.08,
        });
        var booking = document.querySelector(".hero-booking");
        if (booking) {
            gsap.from(booking, {
                y: isNarrow ? 32 : 48,
                autoAlpha: 0,
                duration: isNarrow ? 0.65 : 0.85,
                ease: "power2.out",
                delay: isNarrow ? 0.35 : 0.45,
            });
        }
    }

    function initPageHeader() {
        var ph = document.querySelector(".page-hero-inner");
        if (!ph || !ph.children.length) return;
        gsap.from(ph.children, {
            y: 20,
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.06,
        });
    }

    function initScrollReveals() {
        var nodes = gsap.utils.toArray(".gsap-reveal");
        if (!nodes.length) return;
        nodes.forEach(function (el) {
            gsap.from(el, {
                y: revealY,
                autoAlpha: 0,
                duration: revealDuration,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    once: true,
                },
            });
        });
    }

    function run() {
        initNav();
        initHomeHero();
        initPageHeader();
        initScrollReveals();
        ScrollTrigger.refresh();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", run);
    } else {
        run();
    }

    window.addEventListener("load", function () {
        ScrollTrigger.refresh();
    });
})();
