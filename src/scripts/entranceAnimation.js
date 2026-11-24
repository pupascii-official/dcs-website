const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
        });
    },
    {
        threshold: 0.025,
    }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
    observer.observe(element);
});