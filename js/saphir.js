(function () {
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    var nav = document.querySelector("nav");
    if (nav) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                nav.classList.add("bg-saphir-nav-scrolled");
                nav.classList.remove("glass-panel");
            } else {
                nav.classList.remove("bg-saphir-nav-scrolled");
                nav.classList.add("glass-panel");
            }
        });
    }

    var btn = document.getElementById("mobile-menu-btn");
    var panel = document.getElementById("mobile-menu-panel");
    var closeBtn = document.getElementById("mobile-menu-close");

    function setOpen(open) {
        if (!panel || !btn) return;
        panel.classList.toggle("hidden", !open);
        panel.setAttribute("aria-hidden", open ? "false" : "true");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("mobile-nav-open", open);
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    }

    if (btn && panel) {
        btn.addEventListener("click", function () {
            setOpen(panel.classList.contains("hidden"));
        });
    }
    if (closeBtn && panel) {
        closeBtn.addEventListener("click", function () {
            setOpen(false);
        });
    }
    if (panel) {
        panel.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                setOpen(false);
            });
        });
    }
})();
