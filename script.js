//////////////////// Page element variables //////////



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

////////////////// Intersection Observers ////////////


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("shown");
            entry.target.classList.remove("not-shown");
            console.group('done');

        }
    });
}, {threshold: 0.5});

hiddenElements = document.querySelectorAll(".not-shown");
console.log(hiddenElements)
hiddenElements.forEach((el) => observer.observe(el));
