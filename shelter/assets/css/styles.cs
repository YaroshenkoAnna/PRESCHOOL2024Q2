:root {
  --color-light-s: #fafafa;
  --color-dark-s: #cdcdcd;
  --color-light-xl: #fff;
  --color-primary: #f1cdb3;
  --color-dark-l: #545454;
  --color-dark-xl: #4c4c4c;
  --color-light-l: #f6f6f6;
  --color-dark-m: #b2b2b2;
  --color-primary-light: #fddcc4;
}

@font-face {
  font-family: Arial;
  src: url("arial-regular.ttf");
}
@font-face {
  font-family: Georgia;
  src: url("georgia-regular.ttf");
}
.container {
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
}

.not-only {
  background: url("../../assets/images/start-screen-gradient-background.png"), radial-gradient(100% 215.42% at 0% 0%, #5b483a 0%, #262425 100%), #211f20;
}
.not-only__wraper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 908px;
}
.not-only__content {
  max-width: 460px;
  margin: 343px 28px 0 0;
}
.not-only__title {
  color: var(--color-light-xl);
  font-family: Georgia;
  font-size: 44px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 57.2px */
}
.not-only__description {
  color: var(--color-dark-s);
  font-family: Arial;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 24px */
  padding: 42px 0;
}
.not-only__image {
  align-self: flex-end;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.header {
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
}
.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
}
.header__title {
  color: var(--color-primary);
  font-family: Georgia;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 35.2px */
  letter-spacing: 1.92px;
  transition: all 0.3s ease-in-out;
}
.header__text {
  color: var(--color-light-xl);
  font-family: Arial;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.3px;
  padding-top: 10px;
  transition: all 0.3s ease-in-out;
  text-align: center;
}
.header__logo {
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.header__logo:hover {
  cursor: pointer;
}
.header__logo:hover .header__title {
  color: var(--color-light-xl);
}
.header__logo:hover .header__text {
  color: var(--color-primary);
}

.nav .nav__items {
  display: flex;
  color: var(--color-dark-s);
  /* paragraph-l */
  font-family: Arial;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 24px */
}
.nav__item {
  list-style: none;
  transition: all 0.3s ease-in-out;
}
.nav__item:hover {
  color: var(--color-light-s);
}
.nav__item:first-child {
  color: var(--color-light-s);
  border-bottom: 3px solid var(--color-primary);
}
.nav__item:not(:last-child) {
  margin-right: 36px;
}
.nav__link {
  color: inherit;
  text-decoration: none;
}

.button {
  border-radius: 100px;
  padding: 15px 45px;
  color: var(--color-dark-3xl, #292929);
  font-family: Georgia;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 22.1px */
  letter-spacing: 1.02px;
  transition: all 0.3s ease-in-out;
}
.button:hover {
  background: var(--color-primary-light);
  border-color: var(--color-primary-light);
  cursor: pointer;
}
.button_primary {
  background-color: var(--color-primary);
}
.button_secondary {
  background-color: var(--color-light-s);
  border: 2px solid var(--color-primary);
  padding: 14px 43px;
}
.button__link {
  color: inherit;
  text-decoration: inherit;
}

.pay-button {
  border-radius: 9px;
  background: var(--color-primary);
  padding: 10px 15px;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.pay-button__number {
  color: var(--color-dark-l);
  font-family: Georgia;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 23px */
  letter-spacing: 1.2px;
  padding-left: 45px;
}
.pay-button__image {
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
}

.section_light-xl {
  background: var(--color-light-xl);
}
.section_light-l {
  background: var(--color-light-l);
}
.section__container {
  padding-top: 80px;
  padding-bottom: 100px;
}
.section__wraper {
  display: flex;
  justify-content: center;
}
.section__wraper_row {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section__carousel {
  margin-top: 60px;
  margin-bottom: 59px;
}
.section__content {
  padding: 13px 0 0 120px;
  max-width: 430px;
}
.section__title {
  color: var(--color-dark-l);
  font-family: Georgia;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 45.5px */
  letter-spacing: 2.1px;
  max-width: 400px;
}
.section__title_middle {
  margin: 0 auto;
  text-align: center;
}
.section__description {
  color: var(--color-dark-xl);
  font-family: Arial;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 24px */
  padding-top: 25px;
}
.section__card {
  margin: 0 45px;
}
.section__button {
  text-align: center;
}
.section__items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 60px;
  margin-top: -56px;
}
.section__item-image {
  padding-bottom: 24px;
}
.section__item {
  padding: 0 60px;
  text-align: center;
  list-style: none;
  margin-top: 56px;
}
.section__item-title {
  color: var(--color-dark-l);
  font-family: Georgia;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 23px */
  letter-spacing: 1.2px;
}
.section__content_s {
  padding-left: 30px;
}
.section__content-title {
  color: var(--color-dark-l);
  font-family: Georgia;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 16.5px */
  letter-spacing: 0.9px;
  margin: 20px 0;
}
.section__content-description {
  color: var(--color-dark-m);
  font-family: Arial;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 18px; /* 150% */
  max-width: 380px;
  padding-top: 20px;
}
.section__image {
  object-fit: contain;
}

.card {
  border-radius: 9px;
  background: var(--color-light-s);
  text-align: center;
}
.card:hover {
  cursor: pointer;
}
.card:hover .card__button {
  background: var(--color-primary-light);
  border-color: var(--color-primary-light);
}
.card__title {
  color: var(--color-dark-l);
  text-align: center;
  font-family: Georgia;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.2px;
  padding: 25px 0 29px;
}
.card__button {
  margin-bottom: 30px;
}

.carousel__button {
  border-radius: 100px;
  border: 2px solid var(--color-primary);
  align-self: center;
  padding: 0;
}
.carousel__arrow {
  padding: 23px 19px 19px;
}
.carousel__arrow_right {
  transform: scale(-1, 1);
}

.footer {
  background: url("../../assets/images/start-screen-gradient-background.png"), radial-gradient(100% 215.42% at 0% 0%, #5b483a 0%, #262425 100%), #211f20;
}
.footer__wraper {
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
}
.footer__content {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 66px;
}
.footer__title {
  color: var(--color-light-xl);
  font-family: Georgia;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 45.5px */
  letter-spacing: 2.1px;
}
.footer__image {
  align-self: flex-end;
}
.footer__link {
  color: var(--color-primary);
  font-family: Georgia;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 23px */
  letter-spacing: 1.2px;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  position: relative;
}
.footer__content:first-child .footer__link-description {
  padding-left: 60px;
}
.footer__link-description {
  padding-left: 40px;
}
.footer__link:hover {
  cursor: pointer;
  color: var(--color-light-l);
}
.footer__icon {
  height: 32px;
  padding-right: 20px;
  fill: var(--color-primary);
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  margin-top: -1rem;
}
.footer__link:hover .footer__icon {
  fill: var(--color-light-l);
}

html {
  width: 100vw;
  height: 100vh;
  scroll-behavior: smooth;
}

/*# sourceMappingURL=styles.cs.map */
