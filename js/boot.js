/**
 * Load slide HTML fragments, then start Reveal.
 * Edit the list when you add a new workshop block.
 */
(function () {
  var SLIDE_FILES = [
    "slides/00-kickoff.html",
    "slides/01-theory.html",
    "slides/01b-openspec.html",
    "slides/02-build-early.html",
    "slides/03-build-late.html",
    "slides/04-close.html",
  ];

  function injectDlHeaders() {
    var headerHtml =
      '<div class="dl-header">' +
      '<img src="images/dl-school-logo-icon.svg" alt="DL">' +
      '<div class="dl-header-text">' +
      '<span class="dl-top">DIGITALE LEUTE</span>' +
      '<span class="dl-bottom">SCHOOL</span>' +
      "</div>" +
      "</div>";

    var tagLabels = { repeat: "Repeat", bonus: "Bonus", summary: "Summary" };

    function ensureSlideTag(sec, header) {
      var tag = (sec.getAttribute("data-slide-tag") || "").toLowerCase();
      if (!tag || !tagLabels[tag] || header.querySelector(".slide-tag")) return;
      var el = document.createElement("span");
      el.className = "slide-tag slide-tag-" + tag;
      el.textContent = tagLabels[tag];
      header.appendChild(el);
    }

    document
      .querySelectorAll(".reveal .slides > section")
      .forEach(function (sec) {
        var inner = sec.querySelector(":scope > .slide-inner");
        if (!inner) return;

        var header = inner.querySelector(":scope > .dl-header");
        if (!header) {
          inner.insertAdjacentHTML("afterbegin", headerHtml);
          header = inner.querySelector(":scope > .dl-header");
          var bg = (sec.getAttribute("data-background-color") || "").toLowerCase();
          if (bg === "#151616" || bg === "#000" || bg === "#000000") {
            header.classList.add("dl-header-dark");
          }
        }

        ensureSlideTag(sec, header);

        var legacyLogo = inner.querySelector(
          'img[src="images/dl-school-logo.svg"]',
        );
        if (legacyLogo && legacyLogo.closest(".col-60, .col-40")) {
          if (!legacyLogo.closest('[style*="rgba(255,255,255"]')) {
            legacyLogo.remove();
          }
        }
      });
  }

  function startDeck() {
    injectDlHeaders();

    var kiosk = new URLSearchParams(window.location.search).has("kiosk");

    Reveal.initialize({
      hash: true,
      loop: !kiosk,
      transition: "slide",
      backgroundTransition: "fade",
      slideNumber: kiosk ? false : "c/t",
      showSlideNumber: "all",
      controls: !kiosk,
      controlsLayout: "bottom-right",
      controlsTutorial: false,
      controlsBackArrows: "visible",
      progress: !kiosk,
      keyboard: !kiosk,
      touch: !kiosk,
      center: false,
      width: 1280,
      height: 720,
      margin: 0.05,
      totalTime: 3 * 60 * 60,
      plugins: [RevealNotes],
    });

    function syncDeckChromeContrast() {
      var slide = Reveal.getCurrentSlide();
      var bg = (
        (slide && slide.getAttribute("data-background-color")) ||
        ""
      ).toLowerCase();
      var dark = bg === "#151616" || bg === "#000" || bg === "#000000";
      document.documentElement.classList.toggle("deck-chrome-dark", dark);
    }
    Reveal.on("ready", syncDeckChromeContrast);
    Reveal.on("slidechanged", syncDeckChromeContrast);

    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-skip-after-tag]");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      var tag = (btn.getAttribute("data-skip-after-tag") || "").toLowerCase();
      if (!tag || !window.Reveal) return;
      var sections = Array.prototype.slice.call(
        document.querySelectorAll(".reveal .slides > section"),
      );
      var i = Reveal.getIndices().h;
      while (
        i < sections.length &&
        (sections[i].getAttribute("data-slide-tag") || "").toLowerCase() === tag
      ) {
        i += 1;
      }
      if (i < sections.length) Reveal.slide(i);
    });

    if (kiosk) {
      document.head.insertAdjacentHTML(
        "beforeend",
        "<style>#nav-btn,#nav-overlay,#deck-chrome-left{display:none!important}</style>",
      );
    }

    document.dispatchEvent(new Event("dl-slides-ready"));
  }

  var host = document.querySelector(".reveal .slides");
  if (!host) return;

  Promise.all(
    SLIDE_FILES.map(function (file) {
      return fetch(file).then(function (res) {
        if (!res.ok) throw new Error("Failed to load " + file + " (" + res.status + ")");
        return res.text();
      });
    }),
  )
    .then(function (parts) {
      host.innerHTML = parts.join("\n");
      startDeck();
    })
    .catch(function (err) {
      console.error(err);
      host.innerHTML =
        '<section data-background-color="#ffffff"><div class="slide-inner top">' +
        "<h2>Could not load slides</h2>" +
        "<p>Serve the deck over HTTP (<code>npm run start</code>) so fragment files can be fetched.</p>" +
        "<p>" +
        String(err).replace(/</g, "&lt;") +
        "</p></div></section>";
    });
})();
