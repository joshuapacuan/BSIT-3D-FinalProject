const popupOverlay = document.querySelector(".popup-overlay");
const skipButton = document.querySelector(".skip-button");
const visitButton = document.querySelector(".visit-button");
const nsAd = document.querySelector(".ns");

let remainingTime = 5;
let allowedToSkip = false;
let popupTimer;


    const showAd = () => {
        popupOverlay.classList.add("active");
        nsAd.classList.add("active-ad");
        popupTimer = setInterval(() => {
            console. log(remainingTime);
            skipButton.innerHTML = `Skip in ${remainingTime}s`;
            remainingTime--;

            if (remainingTime < 0) {
                allowedToSkip = true;
                skipButton.innerHTML = "Skip";
                clearInterval(popupTimer);
            }

        }, 1000);
    };

const skipAd = () => {
    popupOverlay.classList.remove("popup-overlay");
    nsAd.classList.remove("active-ad");
};

skipButton.addEventListener("click", () => {
    if (allowedToSkip) {
        skipAd();
    }
    
});

const startTimer = () => { 
    if (window.scrollY > 100) {
    showAd()
    window.removeEventListener("scroll", startTimer);
    }
};

window.addEventListener("scroll", startTimer);