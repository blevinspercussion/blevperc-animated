//////////////////// Page element variables //////////


////////////////// Intersection Observers ////////////

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersection = entry.isIntersecting;
        entry.target.classList.remove("hidden");
        entry.target.classList.add("shown");
    })
}, {threshold: 1});

// observer.observe(document.getElementById("performance-div"))
observer.observe(document.querySelectorAll("hidden"))

//////////////////// Animate elements ////////////////


anime({
    targets: "#title-div",
    translateX: [-1500, 0],
    delay: 500,
    duration: 2000,
    easing: "linear",
})

anime({
    targets: "#nav-list",
    translateX: [1500, 0],
    delay: 500,
    duration: 2000,
    easing: "linear"
})

anime({
    targets: "#hero-text",
    translateX: [2500, 0],
    delay: 500,
    duration: 1500,
    easing: "easeInOutQuad",
})

anime({
    targets: "#hero",
    translateX: [-1500, 0],
    delay: 500,
    duration: 1500,
    // easing: "spring(1, 50, 10, 0)",
    easing: "easeInOutQuad",
})
