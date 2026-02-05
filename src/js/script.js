/**
 * Script Purpose: Custom scripts for Black Doctor RSVP Webflow project.
 * Author: By Default Studio
 * Created: 2025-02-03
 * Version: 1.0.0
 * Last Updated: 2025-02-03
 */

console.log("script.js v1.0.0");

//
//------- Invitee personalisation (?name query) -------//
//

/**
 * Reads ?name= from the URL and sets invitee text exactly as provided. Adds .is-shown when present.
 * Casing is whatever is in the URL (e.g. ?name=Erlen+Masson → "Erlen Masson", ?name=ALEX → "ALEX").
 */
function initInviteeFromQuery() {
  const invitee = document.querySelector(".invitee");
  if (!invitee) return;

  const params = new URLSearchParams(window.location.search);
  const name = (params.get("name") || "").replace(/\+/g, " ").trim();
  if (name) {
    invitee.textContent = name;
    invitee.classList.add("is-shown");
  } else {
    invitee.classList.remove("is-shown");
  }
}

//
//------- Envelope Animation -------//
//

function envelopeAnimation() {
  const lid = document.querySelector(".envelope-lid");
  const layers = document.querySelectorAll("[data-envelope-layer]");
  const envelopeWrapper = document.querySelector("[data-envelope-wrapper]");
  const pageContent = document.querySelector(".page-content");
  const invitationWrapper = document.querySelector(".invitation-wrapper");
  const emptySpace = document.querySelector(".empty-space");


  if (!lid) return;

  console.log("Envelope animation started");

  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
  const moveTarget = envelopeWrapper || (layers.length ? layers : null);

  // ---- 1. Invitation hidden at start ----
  if (invitationWrapper) {
    tl.set(invitationWrapper, { opacity: 0 });
  }

  // ---- 2. Envelope moves down to bottom of viewport (1s delay, then 1s move) ----
  if (moveTarget) {
    const moveElement = envelopeWrapper || layers[0];
    const rect = moveElement.getBoundingClientRect();
    const offsetLower = 80; // Add pixels to move envelope lower (e.g. 80); use negative to keep it higher
    const distanceToBottom = window.innerHeight - rect.bottom + offsetLower;

    tl.to(moveTarget, {
      y: distanceToBottom,
      duration: 1.5,
      delay: 0.5,
      ease: "sine.inOut"
    });
  }

  // ---- 3. Invitation fades in ----
  if (invitationWrapper) {
    tl.to(invitationWrapper, {
      opacity: 1,
    });
  }

  // ---- 4. Lid opens (rotate 180° back); allow body scroll ----
  tl.add(() => {
    document.body.classList.remove("overflow-hidden");
  });
  tl.to(lid, {
    rotateX: -180,
    duration: 0.8,
    delay: 0,
    ease: "power2.inOut"
  });

  // ---- 5. Lid drops behind content ----
  tl.set(lid, { zIndex: -1 });

  // ---- 6. Empty space shrinks (70vh → 10vh) ----
  if (emptySpace) {
    tl.to(emptySpace, {
      height: "10vh",
      duration: 1,
      ease: "sine.inOut"
    });
  }
}

//
//------- Anchor links (scroll without updating URL) -------//
//

/**
 * Intercepts anchor clicks, scrolls to target, prevents URL hash from changing.
 * Handles href like "#rsvp" or "/page#rsvp". Runs in capture phase so it fires before other handlers.
 */
function initAnchorLinksNoHash() {
  document.addEventListener(
    "click",
    (e) => {
      const link = e.target.closest("a[href*='#']");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const id = href.slice(hashIndex + 1).split("?")[0].trim();
      if (!id) return;

      e.preventDefault();
      e.stopPropagation();

      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    true
  );
}

//
//------- Scroll to top -------//
//

function scrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const pageWrapper = document.querySelector(".page-wrapper");
  const pageContent = document.querySelector(".page-content");
  if (pageWrapper) pageWrapper.scrollTop = 0;
  if (pageContent) pageContent.scrollTop = 0;
}

//
//------- Initialize -------//
//

document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  document.body.classList.add("overflow-hidden");

  scrollToTop();
  requestAnimationFrame(() => {
    scrollToTop();
    setTimeout(scrollToTop, 100);
  });

  initInviteeFromQuery();
  initAnchorLinksNoHash();
  envelopeAnimation();
});

