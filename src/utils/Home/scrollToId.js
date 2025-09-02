export function scrollToId(id, offset = 80, behavior = "smooth") {
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior })
}