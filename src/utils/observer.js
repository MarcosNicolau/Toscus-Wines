const lazyLoading = (element, setter) => {
    const options = {
        rootMargin: '200px',
        threshold: .25
    }

    const observer = new IntersectionObserver(entries => {
        return entries.forEach(entry => {
            if(!entry.isIntersecting) return setter(false);
            return setter(true);       
        });
    }, options);

    observer.observe(element);
}

export default lazyLoading;