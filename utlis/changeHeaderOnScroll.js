export const headerChangeOnScroll = () => {
  // 要素を取得
  var mainNav = document.querySelector(".main-nav");
  var navLogoWrapLogo = document.querySelector(".nav-logo-wrap .logo");
  var lightAfterScroll = document.querySelector(".light-after-scroll");

  // 要素が存在するかチェック
  if (mainNav) {
    if (window.scrollY > 0) {
      mainNav.classList.remove("transparent");
      mainNav.classList.add("small-height", "body-scrolled");
    } else if (window.scrollY === 0) {
      mainNav.classList.add("transparent");
      mainNav.classList.remove("small-height", "body-scrolled");
    }
  }

  // navLogoWrapLogo が存在する場合の処理
  if (navLogoWrapLogo) {
    if (window.scrollY > 0) {
      navLogoWrapLogo.classList.add("small-height");
    } else if (window.scrollY === 0) {
      navLogoWrapLogo.classList.remove("small-height");
    }
  }

  // lightAfterScroll が存在する場合の処理
  if (lightAfterScroll) {
    if (window.scrollY > 0) {
      lightAfterScroll.classList.remove("dark");
    } else if (window.scrollY === 0) {
      lightAfterScroll.classList.add("dark");
    }
  }
};
