(function (){
    const container = document.querySelector('.chat-input__buttons-container')
    const click = () => {
        const button = document.querySelector('.claimable-bonus__icon')
        if (button) button.click()
    }
    const observe = (element, callback) => {
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (!element) return console.error('[Yata] Element not found!');
        if (MutationObserver) {
            const observer = new MutationObserver((mutations) => callback(mutations))
            observer.observe(element, { childList: true, subtree: true });
        }
        else element.addEventListener('DOMNodeInserted', callback)
    }
    
    click()
    observe(container, () => click())
})();
