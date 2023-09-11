//JavaScript for entire website... Hopefully I leave comments explaning what everything is....

//Animation for Band Geeks text reavel
window.addEventListener('scroll', function () {
  var spotifyContainer = document.querySelector('.spotify');
  var position = spotifyContainer.getBoundingClientRect();
  var revealPosition = window.innerHeight / 1.2; 

  if (position.top < window.innerHeight - revealPosition && position.bottom >= revealPosition) {
    spotifyContainer.classList.add('reveal');
  } 
});

//Animation for Director list text reavel
var directorItems = document.querySelectorAll('.directors-list li');
var revealPosition = window.innerHeight / 1; 

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.classList.add('reveal');
      }, 500); 
    }
  });
});

directorItems.forEach(function (item) {
  observer.observe(item);
});
//disable mix blend mode for pages that have colored backgrounds...
if (window.location.pathname.includes("hyde.html")) {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('disable-mix-blend-mode');
}

//Background color change for when you scroll into the contat section
const workSection = document.getElementById('work');
const contactSection = document.getElementById('contact');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const contactSectionOffsetTop = contactSection.offsetTop;
  const contactSectionHeight = contactSection.offsetHeight;
  const scrollDistance = scrollPosition + windowHeight;

  const transitionStartPoint = contactSectionOffsetTop + (contactSectionHeight / 2.5);

  if (scrollDistance >= transitionStartPoint) {
    workSection.classList.add('active');
    contactSection.classList.add('active');
    const cursorElements = document.querySelectorAll('.cursor');
    cursorElements.forEach(element => {
      element.style.color = '#fff';
      element.style.removeProperty('mix-blend-mode');
    });
    navbar.style.mixBlendMode = 'normal';
    header.style.mixBlendMode = 'normal';
  } else {
    workSection.classList.remove('active');
    contactSection.classList.remove('active');
    const cursorElements = document.querySelectorAll('.cursor');
    cursorElements.forEach(element => {
      element.style.color = '';
      element.style.mixBlendMode = 'difference';
    });
    navbar.style.removeProperty('mix-blend-mode');
    header.style.removeProperty('mix-blend-mode');
  }
});

//Give functions to close images in gallery by pressing esc, clicking outside of the image, or the x button in top left...
function openModal(img) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = img.src;

  document.addEventListener("keydown", handleKeyDown);
  modal.addEventListener("click", handleCloseModal);
}
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";

  document.removeEventListener("keydown", handleKeyDown);
  modal.removeEventListener("click", handleCloseModal);
}
function handleKeyDown(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}
function handleCloseModal(event) {
  if (event.target === this) {
    closeModal();
  }
}

//underline animation for which link you press in the work-foot section... theatrical, gallery, excluding the musical feats.
document.addEventListener("DOMContentLoaded", function() {
  var currentHash = window.location.hash;
  var currentSection = currentHash.slice(1);
  var links = document.querySelectorAll('.work-foot a');
  links.forEach(function(link) {
      if (link.getAttribute('href') === currentHash) {
          link.classList.add('active');
      }
      if (link.getAttribute('href') === "#musical-features") {
          link.style.cursor = "none";
      } else {
          link.addEventListener('click', function(event) {
              links.forEach(function(otherLink) {
                  otherLink.classList.remove('active');
              });
              this.classList.add('active');
          });
      }
  });
});
window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}

//function to toggle list view for theatrical



//function for swappable divs in work section...
function swapElements(section) {
  var theatrical = document.getElementById('theatrical');
  var gallery = document.getElementById('gallery');
  var video = document.getElementById('video');
  var back = document.querySelector('.backdrop');

  theatrical.style.transition = 'transform 0.8s';
  gallery.style.transition = 'transform 0.8s';
  video.style.transition = 'transform 0.8s';

  if (section === 'theatrical') {
    theatrical.style.transform = 'translateX(0)';
    gallery.style.transform = 'translateX(100%)';
    video.style.transform = 'translateX(100%)';

    setTimeout(function() {
      theatrical.style.display = 'flex';
      gallery.style.display = 'none';
      video.style.display = 'none';

      // Slide in the new div
      theatrical.style.transform = 'translateX(-100%)';
      theatrical.style.opacity = '0';
      setTimeout(function() {
        theatrical.style.transform = 'translateX(0)';
        theatrical.style.opacity = '1';
        theatrical.style.transform = 'none';

        // Reset gallery and video positions
        gallery.style.transform = 'none';
        video.style.transform = 'none';
      }, 10);
    }, 500);
  } else if (section === 'gallery') {
    if (video.style.display === 'flex') {
      theatrical.style.transform = 'translateX(-100%)';
      gallery.style.transform = 'translateX(100%)';
      video.style.transform = 'translateX(100%)';

      setTimeout(function() {
        theatrical.style.display = 'none';
        gallery.style.display = 'flex';
        video.style.display = 'none';

        // Slide in the new div
        gallery.style.transform = 'translateX(-100%)';
        gallery.style.opacity = '0';

        setTimeout(function() {
          gallery.style.transform = 'translateX(0)';
          gallery.style.opacity = '1';
          gallery.style.transform = 'none';

          // Reset theatrical and video positions
          theatrical.style.transform = 'none';
          video.style.transform = 'none';
        }, 10);
      }, 500);
    } else {
      theatrical.style.transform = 'translateX(-100%)';
      gallery.style.transform = 'translateX(100%)';
      video.style.transform = 'translateX(100%)';

      setTimeout(function() {
        theatrical.style.display = 'none';
        gallery.style.display = 'flex';
        video.style.display = 'none';

        // Slide in the new div
        gallery.style.transform = 'translateX(100%)';
        gallery.style.opacity = '0';
        setTimeout(function() {
          gallery.style.transform = 'translateX(0)';
          gallery.style.opacity = '1';
          gallery.style.transform = 'none';

          // Reset theatrical and video positions
          theatrical.style.transform = 'none';
          video.style.transform = 'none';
        }, 10);
      }, 500);
    }
  } else if (section === 'video') {
    theatrical.style.transform = 'translateX(-100%)';
    gallery.style.transform = 'translateX(-100%)';
    video.style.transform = 'translateX(0)';

    setTimeout(function() {
      theatrical.style.display = 'none';
      gallery.style.display = 'none';
      video.style.display = 'flex';

      // Slide in the new div
      video.style.transform = 'translateX(100%)';
      video.style.opacity = '0';

      setTimeout(function() {
        video.style.transform = 'translateX(0)';
        video.style.opacity = '1';
        video.style.transform = 'none';

        // Reset theatrical and gallery positions
        theatrical.style.transform = 'none';
        gallery.style.transform = 'none';

      }, 10);
    }, 500);
  }
}

// Add a class to the nav menu to trigger the animation when the page is loaded
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    const x = e.clientX;
    const y = e.clientY;
    
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    });
    
    const links = document.querySelectorAll(".nav-link");
    
    links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("large");
    });
    
    link.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("large");
    });
    });

    const link3 = document.querySelectorAll(".logo");
    
    link3.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("large");
    });
    
    link.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("large");
    });
    });

    const link5 = document.querySelectorAll(".hamburger");
    
    link5.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("large");
    });
    
    link.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("large");
    });
    });

    const link4 = document.querySelectorAll(".h3-footer-link");
    
    link4.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("large");
    });
    
    link.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("large");
    });
    });

    const link6 = document.querySelectorAll(".player-btn");
    
    link6.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("large");
    });
    
    link.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("large");
    });
    });

    const link7 = document.querySelectorAll(".work-foot a");
    
    link7.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("large");
    });
    
    link.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("large");
    });
    });

    const link8 = document.querySelectorAll("input");
    
    link8.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("large");
    });
    
    link.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("large");
    });
    });
    const link9 = document.querySelectorAll("label");
    
    link9.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("large");
    });
    
    link.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("large");
    });
    });

    const link10 = document.querySelectorAll(".submit-button i");

    link10.forEach((link) => {
      link.addEventListener("mouseenter", () => {
          const cursor = document.querySelector(".cursor");
          cursor.classList.add("large");
      });
      
      link.addEventListener("mouseleave", () => {
          const cursor = document.querySelector(".cursor");
          cursor.classList.remove("large");
      });
      });

      const link11 = document.querySelectorAll(".image-text");

      link11.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            const cursor = document.querySelector(".cursor");
            cursor.classList.add("large");
        });
        
        link.addEventListener("mouseleave", () => {
            const cursor = document.querySelector(".cursor");
            cursor.classList.remove("large");
        });
        });

        const link12 = document.querySelectorAll(".back-button");

        link12.forEach((link) => {
          link.addEventListener("mouseenter", () => {
              const cursor = document.querySelector(".cursor");
              cursor.classList.add("large");
          });
          
          link.addEventListener("mouseleave", () => {
              const cursor = document.querySelector(".cursor");
              cursor.classList.remove("large");
          });
          });

          const link13 = document.querySelectorAll(".directors-list li");

          link13.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                const cursor = document.querySelector(".cursor");
                cursor.classList.add("large");
            });
            
            link.addEventListener("mouseleave", () => {
                const cursor = document.querySelector(".cursor");
                cursor.classList.remove("large");
            });
            });
            const link14 = document.querySelectorAll(".download-button");

            link14.forEach((link) => {
              link.addEventListener("mouseenter", () => {
                  const cursor = document.querySelector(".cursor");
                  cursor.classList.add("large");
              });
              
              link.addEventListener("mouseleave", () => {
                  const cursor = document.querySelector(".cursor");
                  cursor.classList.remove("large");
              });
              });
              const link15 = document.querySelectorAll(".spotify-image");

              link15.forEach((link) => {
                link.addEventListener("mouseenter", () => {
                    const cursor = document.querySelector(".cursor");
                    cursor.classList.add("large");
                });
                
                link.addEventListener("mouseleave", () => {
                    const cursor = document.querySelector(".cursor");
                    cursor.classList.remove("large");
                });
                });
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
     }
    
    // Add 'active' class to navigation links when scrolling into section
    /* No longer needed.....
    window.addEventListener('scroll', function() {
    var section = document.querySelector('section');
    var navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        var linkRect = link.getBoundingClientRect();
        var sectionRect = section.getBoundingClientRect();
    
        if (
        linkRect.top >= sectionRect.top &&
        linkRect.bottom <= sectionRect.bottom
        ) {
        link.classList.add('active');
        } else {
        link.classList.remove('active');
        }
    });
    });
    
    window.addEventListener('scroll', function() {
    var section = document.querySelector('section');
    var navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        var linkRect = link.getBoundingClientRect();
        var sectionRect = section.getBoundingClientRect();
    
        if (
        linkRect.top >= sectionRect.top &&
        linkRect.bottom <= sectionRect.bottom
        ) {
        link.classList.add('new-section');
        } else {
        link.classList.remove('new-section');
        }
    });
    });
    */
    document.addEventListener('DOMContentLoaded', () => {
        const popupContainer = document.querySelector('.popup-container');
        const popup = document.getElementById('popup');
        let timeout;
    
        const showPopup = () => {
            if (window.pageYOffset < 200) {
            popup.classList.add('show');
            }
        };
    
        const hidePopup = () => {
            popup.classList.remove('show');
        };
    
        const resetTimeout = () => {
            clearTimeout(timeout);
            timeout = setTimeout(showPopup, 4000);
        };
    
        document.addEventListener('scroll', () => {
            hidePopup();
            resetTimeout();
        });
    
        resetTimeout();
    
        // Add event listener to the pop-up button
        const popupButton = document.querySelector('.popup-button');
    
    
        // Modify the event listeners for the pop-up button
        popupButton.addEventListener('mouseenter', () => {
            const cursor = document.querySelector('.cursor');
            cursor.classList.add('large');
            cursor.style.zIndex = '999999'; // Set a high z-index for the cursor
            cursor.style.mixBlendMode = "normal"; // Override mix-blend-mode for the pop-up button
        });
    
        popupButton.addEventListener('mouseleave', () => {
            const cursor = document.querySelector('.cursor');
            cursor.classList.remove('large');
            cursor.style.zIndex = ''; // Remove the custom z-index
            cursor.style.mixBlendMode = ''; // Override mix-blend-mode for the pop-up button
        });
        });

        document.addEventListener("DOMContentLoaded", function() {
            const smoothScrollLinks = document.getElementsByClassName("smooth-scroll");
            for (let i = 0; i < smoothScrollLinks.length; i++) {
              smoothScrollLinks[i].addEventListener("click", function(event) {
                event.preventDefault();
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);
                const scrollOptions = this.classList.contains("slow-scroll")
                  ? { behavior: "smooth", duration: 1000 }
                  : { behavior: "smooth" };
                targetElement.scrollIntoView(scrollOptions);
              });
            }
          });


          //JS for the song-cards...
          var currentlyPlaying = null;

          // Function to play/pause the audio
          function togglePlay(element) {
            var audio = element.querySelector('.audio');
            var playPauseBtn = element.querySelector('.play-pause');
            var coverImage = element.querySelector('.cover');
          
            if (audio.paused) {
              if (currentlyPlaying) {
                pauseElement(currentlyPlaying);
              }
          
              audio.play();
              playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
              coverImage.classList.add('rotate');
              currentlyPlaying = element;
            } else {
              pauseElement(element);
            }
          }
          
          // Function to pause the audio and rotating the cover...
          function pauseElement(element) {
            var audio = element.querySelector('.audio');
            var playPauseBtn = element.querySelector('.play-pause');
            var coverImage = element.querySelector('.cover');
          
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            coverImage.classList.remove('rotate');
            currentlyPlaying = null;
          }
          
          // Function to update the time progress...
          function updateTime(element) {
            var audio = element.querySelector('.audio');
            var currentTime = element.querySelector('.time span:first-child');
            var duration = element.querySelector('.time span:last-child');
            var progress = element.querySelector('.song-progress');
          
            currentTime.textContent = formatTime(audio.currentTime);
            duration.textContent = formatTime(audio.duration);
          
            // Update progress bar...
            var progressPercentage = (audio.currentTime / audio.duration) * 100;
            progress.style.width = progressPercentage + '%';
          }
          
          // Function to format time in mm:ss format...
          function formatTime(time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
          }
          
          // Function to handle skipping to a specific time in the song
          function handleSkip(element, event) {
            var audio = element.querySelector('.audio');
            var progress = element.querySelector('.song-time');
          
            var rect = progress.getBoundingClientRect();
            var totalWidth = progress.offsetWidth;
            var offsetX = event.clientX - rect.left;
            var percentage = (offsetX / totalWidth) * 100;
            var seekTime = (audio.duration * percentage) / 100;
          
            audio.currentTime = seekTime;
          }
          
          // Attach event listeners to elements
          var elements = document.querySelectorAll('.element');
          
          elements.forEach(function(element) {
            var playPauseBtn = element.querySelector('.play-pause');
            var progress = element.querySelector('.song-time');
          
            playPauseBtn.addEventListener('click', function() {
              togglePlay(element);
            });
          
            progress.addEventListener('click', function(event) {
              handleSkip(element, event);
            });
          
            // Set initial time to 0
            updateTime(element);
          });
          
          // Update time progress on time update
          setInterval(function() {
            elements.forEach(function(element) {
              updateTime(element);
            });
          }, 1000);