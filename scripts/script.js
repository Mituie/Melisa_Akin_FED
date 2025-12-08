console.log("hi");
document.getElementById("hamburger-menu").addEventListener("click", () => {
    document.getElementById("nav-list").classList.toggle("open");
});

const tabs = document.querySelectorAll(".bezorg-tabs .tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});


const ytScript = document.createElement("script");
ytScript.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(ytScript);

let player; 


function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "315",
        width: "560",
        videoId: "maL-EJG-tbw", 
        playerVars: {
            autoplay: 1, 
            mute: 1      
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {

    const soundBtn = document.getElementById("toggle-sound");
    if (!soundBtn) return; 

    soundBtn.addEventListener("click", () => {
        if (!player) return; 

        if (player.isMuted()) {
            player.unMute();
            soundBtn.textContent = "Geluid uit";
        } else {
            player.mute();
            soundBtn.textContent = "Geluid aan";
        }
    });
});


const hamburger = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.add("pop");

    setTimeout(() => {
        hamburger.classList.remove("pop");
    }, 300); 
});


function lazyLoadImages() {
    const images = document.querySelectorAll(".lazy-card");
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
  
          img.classList.add("reveal");
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
  
          obs.unobserve(img);
        }
      });
    }, { threshold: 0.2 });
  
    images.forEach(img => observer.observe(img));
  }
  
  lazyLoadImages();

  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  
    setTimeout(() => {
      loader.remove();
    }, 400);
  });
