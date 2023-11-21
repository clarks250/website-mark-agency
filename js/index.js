// active class of menu items onscroll
window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  let header = document.querySelectorAll(".header")[0];

  if (scrollDistance > 81) {
    header.classList.add("header_scroll");
  }
  if (scrollDistance < 81) {
    header.classList.remove("header_scroll");
  }
});

function lightDarkClick() {
  let welcomeDark = document.querySelectorAll(".welcome")[0];

  if (welcomeDark.classList.contains("welcome__light")) {
    welcomeDark.classList.remove("welcome__light");
  } else {
    welcomeDark.classList.add("welcome__light");
  }
}

const btn__welcomeList = document.querySelectorAll(".btn__welcome");
const btn__welcomeSpanList = document.querySelectorAll(".btn__welcome span");
const smile_welcomeList = document.querySelectorAll(".btn__welcome svg");

btn__welcomeList.forEach((btn__welcome, index) => {      
  const smileIconPaths = smile_welcomeList[index].querySelectorAll("path");

  btn__welcome.addEventListener("mouseenter", () => {
    btn__welcome.style.backgroundColor = "#20D883";
    btn__welcomeSpanList[index].style.color = "black";
    btn__welcomeSpanList[index].style.transition = "transform 0.5s ease";

    smileIconPaths.forEach((path) => {
      path.setAttribute("fill", "black");
    });
  });

  btn__welcome.addEventListener("mouseleave", () => {
    btn__welcome.style.backgroundColor = "black";
    btn__welcomeSpanList[index].style.color = "white";
    btn__welcomeSpanList[index].style.transition = "transform 0.5s ease";

    smileIconPaths.forEach((path) => {
      path.setAttribute("fill", "white");
    });
  });
});




$(document).ready(function() {
  const letterDescriptions = {
    "s": {
      title: "SYNTHESIS",
      description: "Synthesis merges diverse elements into a unified whole. It's the moment when individual components transform into a harmonious and inspiring integrity, symbolizing the unity and interaction of ideas within a system."
    },
    "h": {
      title: "HARMONY",
      description: "Harmony represents the pursuit of equilibrium and unity amidst the tapestry of diversity. It stands as the juncture where thought and philosophy intertwine, crafting an all-encompassing and uplifting unity that beckons the exceptional and nurtures contemplative wholeness."
    },
    "a": {
      title: "AGILITY",
      description: "Agility epitomizes the art of adaptive responsiveness and dynamic growth. It embodies our capacity to evolve in response to the call of novel ideas, embracing the challenges that shape our trajectory and allowing us to expand beyond the conventional confines."
    },
    "p": {
      title: "PIONEERING",
      description: "Pioneering: Guided by audacity and innovation, we explore new horizons in the digital realm, redefining the possibilities of web3 technology."
    },
    "e": {
      title: "EVOLUTION",
      description: "Evolution is an endless process of transformation and growth. It's our response to the call of time, showcasing our capacity to adapt and expand, embracing the beckoning of fresh concepts and embracing the challenges that shape our future."
    },
    "s2": {
      title: "SECURITY",
      description: "Security underpins the fortification of foundations and the assurance of stability. It represents our dedication to fostering reliable frameworks, guarding the intricacies of our endeavors, and ushering in a realm of confidence and trust."
    }
  };

  const allLetters = $(".sidebar a");
  const letterTexts = $(".letter-text");
  const lineContainer = $(".line-container");

  allLetters.eq(0).addClass("active");

  update();
  $("#arrow-up, #arrow-down").click(function() {
    move($(this).attr("id") === "arrow-up" ? -1 : 1);
  });

  function update() {
    const current = $(".sidebar a.active");
    const activeLetter = current.attr("href").substring(1);
    const info = letterDescriptions[activeLetter];

    $(".descriptionDiv p").fadeOut(200, function() {
      $(this).text(info.description).fadeIn(200);
    });

    /*$(".line-container").fadeOut(200, function() {
      $(this).fadeIn(200);
    });*/

    $(".system-description h1").fadeOut(200, function() {
      $(this).text(info.title).fadeIn(200);
    });

    $(".system-description svg").fadeOut(200, function() {
      $(this).attr("stroke-opacity", "0").fadeIn(200);
    });

    $(".system-description h1").text(info.title);

    const activeIndex = allLetters.index(current);

    allLetters.removeClass("inactive").each((index, element) => {
      const opacityValue = 1.2 - 0.22 * Math.abs(index - activeIndex);
      // const fontSizeValue = 40 - 1.3 * Math.abs(index - activeIndex);

      $(element).css({
        opacity: opacityValue,
        // fontSize: fontSizeValue + "px"
      });
    });

    letterTexts.hide();
    current.siblings(".letter-text").show();
    // letterTexts.fadeOut(200);
    // current.siblings(".letter-text").fadeIn(200);
    lineContainer.appendTo(current.parent());
  }

  function move(direction) {
    const current = $(".sidebar a.active");
    const index = allLetters.index(current);
    const newIndex = (index + direction + allLetters.length) % allLetters.length;

    current.removeClass("active");
    allLetters.eq(newIndex).addClass("active").css("opacity", 1);

    update();
  }
});

const allPopups = document.querySelectorAll('.descriptions, .headerBlock');

function handleScrollForAll() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    handlePopup(allPopups, windowHeight, scrollY);
}

function handlePopup(popupElements, windowHeight, scrollY) {
    popupElements.forEach(popup => {
        const popupPosition = popup.getBoundingClientRect().top + scrollY;
        const isVisibleFromTop = popupPosition < windowHeight + scrollY;
        const isVisibleFromBottom = popupPosition + popup.clientHeight > scrollY;

        if (isVisibleFromTop && isVisibleFromBottom ) {
            popup.style.opacity = '1';
            popup.style.transform = 'translateY(0)';
        }
    });

    
}

window.addEventListener('scroll', handleScrollForAll);
