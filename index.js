const autoType = document.querySelector(".auto-type");

let typed = new Typed(".auto-type", {
    strings: ["a software developer.", "a visual artist?^500 .^500 .^500 .\n`probably only in good days.`", "a block-chain enthusiast, sci-fi lover, green house owner."],
    typeSpeed: 80,
    backSpeed: 5,
    loop: true,
});
