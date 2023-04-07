"use strict";
const sectionText1 = document.querySelector(".slide-text1");
const sectionText2 = document.querySelector(".slide-text2");
const allSections = document.querySelectorAll("section");

const reavealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.umobserve(entry.target);
};
const sectionObsever = new IntersectionObserver(reavealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObsever.observe(section);
});
