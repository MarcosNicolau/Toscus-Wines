//This function is called from the hero.js file.
const lazyLoading = () => {
    const sections = document.querySelectorAll('section');
    const options = {
        rootMargin: '200px',
        threshold: .4
    }

    const observer = new IntersectionObserver(entries => {
        return entries.forEach(entry => {
            if(!entry.isIntersecting) return;
            entry.target.classList.add('active-section');
            observer.unobserve(entry.target);
        });
    }, options);
    sections.forEach(section => observer.observe(section));
}

export default lazyLoading;