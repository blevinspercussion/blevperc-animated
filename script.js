// Animate elements 

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
    targets: ".main-image",
    translateY: [-1500, 0],
    delay: 500,
    duration: 1000,
    easing: "spring()",
})

anime({
    targets: "#intro-div",
    translateY: [1500, 0],
    delay: 500,
    duration: 1000,
    easing: "spring()",
})