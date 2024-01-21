function animateValue(elem:HTMLElement | null, start: number, end: number, duration: number) {
  if (start === end) start -= 1;
  const range = end - start;
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(function () {
    current += increment;
    if(elem) elem.innerHTML = String(current);
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

export default animateValue;
