# YΛƬΛ :sparkles:

### Yet Another Twitch Autoclicker™

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)

---

Still minimizing your game just to get some channel points? Are you tired of continuously clicking that little redeem button? You just want to enjoy the stream sitting away from the PC and still get the points (like me)?

**I've got you covered! 🙌**

Meet Yata, a hyper-advanced AI-powered tool that simplifies the process of earning Twitch Channel Points!

### How to use Yata?

##### As a bookmarklet :bookmark:
Drag that code to your browser's bookmark bar and use it right away! Just click the bookmark after joining the stream and your points will be collected automatically.

```javascript
javascript:!function(){const e=document.querySelector(".chat-input__buttons-container"),n=()=>{const e=document.querySelector(".claimable-bonus__icon");e&&e.click()};n(),((e,n)=>{const t=window.MutationObserver||window.WebKitMutationObserver;if(!e)return console.error("[Yata] Element not found!");t?new t(e=>n(e)).observe(e,{childList:!0,subtree:!0}):e.addEventListener("DOMNodeInserted",n)})(e,()=>n())}();
```


### But... why? 🤔

> Because simple problems require complicated solutions.
>
> ~ <cite>**Me**, yesterday</cite>

## More features Soon™
