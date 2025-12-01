document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);

        // Enhanced logic for name-title animation
        if (entry.target.id === "name-title") {
          setTimeout(() => {
            const nameTitle = entry.target;
            const first = nameTitle.querySelector(".first");
            const last = nameTitle.querySelector(".last");
            const mergeLetters = nameTitle.querySelectorAll(".merge");
            const photographyText = nameTitle.querySelector(".photography-text");

            // Step 1: Fade out C and b
            if (first) first.classList.add("fade-out");
            if (last) last.classList.add("fade-out");

            // Step 2: Merge a, l, e into "ale"
            setTimeout(() => {
              const aleSpan = document.createElement("span");
              aleSpan.textContent = "ale";
              aleSpan.className = "merge-ale";

              mergeLetters.forEach(letter => letter.remove());
              nameTitle.insertBefore(aleSpan, last);

              // Step 3: Transition Photography to House Ring Photography
              photographyText.classList.add("fade-text");

              setTimeout(() => {
                photographyText.textContent = "House Of Rings Photography";
                photographyText.classList.remove("fade-text");
                photographyText.classList.add("fade-in");
                // Slide "ale" to the left smoothly
                const aleSpan = nameTitle.querySelector(".merge-ale");
                if (aleSpan) {
                  aleSpan.style.transition ="transform 1s ease";// duration & easing
                  aleSpan.style.transform ="translateX(10px)"; // adjust distance
                }
                
              }, 2000);
            }, 2500);
          }, 3000); // Initial delay after fade-in
        }
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);

        // Enhanced logic for name-title animation
        if (entry.target.id === "name-title") {
          setTimeout(() => {
            const nameTitle = entry.target;
            const first = nameTitle.querySelector(".first");
            const last = nameTitle.querySelector(".last");
            const mergeLetters = nameTitle.querySelectorAll(".merge");
            const photographyText = nameTitle.querySelector(".photography-text");

            // Step 1: Fade out C and b
            if (first) first.classList.add("fade-out");
            if (last) last.classList.add("fade-out");

            // Step 2: Merge a, l, e into "ale"
            setTimeout(() => {
              const aleSpan = document.createElement("span");
              aleSpan.textContent = "ale";
              aleSpan.className = "merge-ale";

              mergeLetters.forEach(letter => letter.remove());
              nameTitle.insertBefore(aleSpan, last);

              // Step 3: Transition Photography to House Ring Photography
              photographyText.classList.add("fade-text");

              setTimeout(() => {
                photographyText.textContent = "House Of Rings Photography";
                photographyText.classList.remove("fade-text");
                photographyText.classList.add("fade-in");
                // Slide "ale" to the left smoothly
                const aleSpan = nameTitle.querySelector(".merge-ale");
                if (aleSpan) {
                  aleSpan.style.transition ="transform 1s ease";// duration & easing
                  aleSpan.style.transform ="translateX(10px)"; // adjust distance
                }
                
              }, 2000);
            }, 2500);
          }, 3000); // Initial delay after fade-in
        }
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});


 


 