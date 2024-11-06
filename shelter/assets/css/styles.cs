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
  --color-dark-3xl: #292929;
}

@font-face {
  font-family: Arial;
  src: url("../fonts/arial-regular.ttf");
}
@font-face {
  font-family: Georgia;
  src: url("../fonts/georgia-regular.ttf");
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

@media only screen and (max-width: 1270px) {
  .container {
    padding: 0 35px;
  }
}
@media only screen and (max-width: 768px) {
  .container {
    padding: 0 30px;
  }
}
@media only screen and (max-width: 576px) {
  .container {
    padding: 0 10px;
  }
}
.not-only {
  background: url("../../assets/images/start-screen-gradient-background.png"), radial-gradient(100% 215.42% at 0% 0%, #5b483a 0%, #262425 77%), #211f20;
}
.not-only__wraper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15%;
}
.not-only__content {
  max-width: 460px;
  margin: 13.5% 10px 0 0;
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
  max-width: 80.37%;
  height: auto;
  object-fit: contain;
}
.not-only__button {
  margin-bottom: 100px;
}

@media only screen and (max-width: 768px) {
  .not-only__wraper {
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
  }
  .not-only__content {
    display: flex;
    flex-direction: column;
    margin: 60px 0 0 0;
  }
  .not-only__button {
    align-self: center;
  }
}
@media only screen and (max-width: 576px) {
  .not-only__title {
    font-size: 25px;
    letter-spacing: 1.256px;
    text-align: center;
  }
  .not-only__description {
    text-align: center;
  }
  .not-only__image {
    width: 260px;
    max-width: 100%;
  }
  .not-only__button {
    margin-bottom: 104px;
  }
}
.header {
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
}
.header_white {
  position: static;
  background: var(--color-light-xl);
}
.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
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
.header__title_dark {
  color: var(--color-dark-l);
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
.header__text_dark {
  color: var(--color-dark-3xl);
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
.header__logo:hover .header__title_dark {
  color: var(--color-dark-l);
  text-shadow: 2px 5px 5px rgb(41, 39, 39);
}
.header__logo:hover .header__text {
  color: var(--color-primary);
}
.header__logo:hover .header__text_dark {
  color: var(--color-dark-3xl);
  text-shadow: 2px 5px 5px rgb(41, 39, 39);
}

@media only screen and (max-width: 576px) {
  .header__content {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.nav {
  color: var(--color-dark-s);
}
.nav_dark {
  color: var(--color-dark-l);
}
.nav__items {
  display: flex;
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
.nav_dark .nav__item:hover {
  color: var(--color-dark-3xl);
}
.nav__item_active {
  color: var(--color-light-s);
  border-bottom: 3px solid var(--color-primary);
  pointer-events: none;
}
.nav_dark .nav__item_active {
  color: var(--color-dark-3xl);
}
.nav__item:not(:last-child) {
  margin-right: 36px;
}
.nav__link {
  color: inherit;
  text-decoration: none;
}

@media only screen and (max-width: 767px) {
  .nav__items {
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: all 0.3s linear;
    width: 320px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-dark-3xl);
    font-size: 32px;
    scroll-behavior: auto;
  }
  .nav__item:not(:last-child) {
    margin-right: 0;
    margin-bottom: 40px;
  }
  .nav__items_open {
    transform: translateX(0);
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.6);
  }
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
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
}
.button_rund {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: var(--color-dark-3xl);
  width: 48px;
  height: 48px;
  font-size: 20px;
  line-height: 115%;
  letter-spacing: 1.2px;
  border: 2px solid var(--color-primary);
  text-decoration: none;
}
.button_disabled {
  color: var(--color-dark-s);
  border-color: var(--color-dark-s);
  pointer-events: none;
}
.button_active {
  background-color: var(--color-primary);
  pointer-events: none;
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

.paginator {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
}

@media only screen and (max-width: 576px) {
  .paginator {
    column-gap: 10px;
  }
  .pay-button__number {
    font-size: 15px;
    line-height: 110%; /* 16.5px */
    letter-spacing: 0.9px;
  }
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
  width: 100%;
}
.section__content {
  padding: 13px 0 0 10%;
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
  padding: 0 5%;
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
  white-space: nowrap;
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
  max-width: 50%;
  flex-shrink: 0;
  object-fit: contain;
  height: auto;
}
.section__gallery {
  margin-top: 60px;
  margin-bottom: 59px;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .section__wraper {
    flex-direction: column-reverse;
    align-items: center;
  }
  .section__content {
    padding: 0 0 80px;
  }
  .section__content_s {
    padding-left: 0;
  }
  .section__content-description {
    margin-bottom: 60px;
  }
  .section__image {
    max-width: 100%;
  }
  .section__gallery {
    margin-top: 28px;
    margin-bottom: 40px;
  }
  .section__container_sm {
    padding-bottom: 76px;
  }
}
@media only screen and (max-width: 1024px) {
  .section__card:last-child {
    display: none;
  }
}
@media only screen and (max-width: 731px) {
  .section__card:nth-child(2) {
    display: none;
  }
  .section__carousel {
    width: auto;
    margin-bottom: 42px;
    margin-top: 40px;
  }
  .section__card {
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 1200px) {
  .section__items {
    justify-content: center;
  }
  .section__item {
    width: 32.7%;
    padding: 0;
  }
}
@media only screen and (max-width: 576px) {
  .section__title {
    text-align: center;
    font-size: 25px;
    letter-spacing: 1.256px;
  }
  .section__container {
    padding-top: 42px;
    padding-bottom: 42px;
  }
  .section__gallery {
    margin-top: 40px;
    margin-bottom: 42px;
  }
  .section__description {
    text-align: justify;
  }
  .section__description:nth-child(3) {
    padding-top: 22px;
  }
  .section__content {
    padding: 0 0 42px;
  }
  .section__wraper {
    margin-left: 15px;
    margin-right: 15px;
  }
  .section__image {
    display: block;
    max-width: 96%;
  }
  .section__items {
    justify-content: space-between;
    margin-top: -51px;
  }
  .section__item {
    width: 47%;
    margin-top: 30px;
  }
  .section__item-image {
    width: 50px;
    height: 50px;
    padding-bottom: 16px;
  }
  .section__item-title {
    font-size: 15px;
    letter-spacing: 0.9px;
  }
  .section__content-title {
    text-align: center;
    letter-spacing: 0;
    line-height: 160%;
  }
  .section__content-description {
    text-align: justify;
    margin-bottom: 42px;
  }
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

.carousel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.carousel__wraper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
}
.carousel__wraper_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 30px;
  justify-content: space-between;
}
.carousel__button {
  align-self: center;
}
.carousel__button:first-child {
  margin-right: 7px;
}
.carousel__button:last-child {
  margin-left: 7px;
}
.carousel__arrow {
  padding: 19px;
}
.carousel__arrow_right {
  transform: scale(-1, 1);
}

@media only screen and (max-width: 768px) {
  .carousel__button:first-child {
    margin-right: 12px;
  }
  .carousel__button:last-child {
    margin-left: 12px;
  }
  .carousel__wraper {
    justify-content: space-between;
  }
}
@media only screen and (max-width: 576px) {
  .carousel {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .carousel__wraper {
    justify-content: center;
  }
  .carousel__button {
    order: 10;
  }
}
@media only screen and (max-width: 731px) {
  .carousel__button:first-child {
    margin-right: 40px;
  }
  .carousel__button:last-child {
    margin-left: 40px;
  }
}
.footer {
  background: url("../../assets/images/start-screen-gradient-background.png"), radial-gradient(100.89% 215.65% at 5.73% 31%, #513d2f 0%, #1a1a1c 100%), #211f20;
}
.footer__wraper {
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  flex-wrap: wrap;
}
.footer__content {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 60px;
}
.footer__title {
  color: var(--color-light-xl);
  font-family: Georgia;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 45.5px */
  letter-spacing: 2.1px;
  max-width: 280px;
}
.footer__image {
  align-self: flex-end;
  object-fit: contain;
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
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
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
}
.footer__link:hover .footer__icon {
  fill: var(--color-light-l);
}

@media only screen and (max-width: 992px) {
  .footer__wraper {
    padding-top: 30px;
    justify-content: space-around;
  }
}
@media only screen and (max-width: 1024px) {
  .footer__content {
    padding: 0 10px 65px;
    height: 234px;
  }
}
@media only screen and (max-width: 672px) {
  .footer__title {
    text-align: center;
    padding-bottom: 40px;
    font-size: 25px;
    letter-spacing: 1.5px;
    align-self: center;
  }
  .footer__content {
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
    height: auto;
  }
  .footer__link {
    padding-bottom: 40px;
  }
}
@media only screen and (max-width: 576px) {
  .footer__content:nth-child(2) {
    margin: 0 -10px 5px;
    align-items: flex-start;
  }
  .footer__content:nth-child(2) .footer__title {
    padding-bottom: 38px;
  }
  .footer__content:nth-child(2) .footer__link {
    margin-left: -4px;
  }
}
@media only screen and (max-width: 320px) {
  .footer__image {
    width: 260px;
    height: 269px;
    margin-top: -4px;
  }
}
.gallery {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.gallery__wraper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 270px));
  column-gap: 40px;
  row-gap: 30px;
  width: 100%;
  justify-content: center;
  max-height: 900px;
  overflow: hidden;
}

@media only screen and (max-width: 969px) {
  .gallery__wraper {
    max-height: 1365px;
  }
}
.burger-menu {
  position: relative;
  z-index: 3;
}
.burger-menu__checkbox {
  position: absolute;
  visibility: hidden;
}

@media only screen and (max-width: 767px) {
  .burger-menu__checkbox:checked + .burger-menu__label {
    transform: rotate(90deg);
    transition: all 0.3s, transform 0.3s;
  }
  .burger-menu__label {
    cursor: pointer;
    display: block;
    position: relative;
    border: none;
    background: transparent;
    width: 30px;
    height: 22px;
    transition: all 0.3s, transform 0.3s;
  }
  .burger-menu__label::before, .burger-menu__label::after {
    content: "";
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background: var(--color-primary);
    transition: all 0.3s ease-in-out;
  }
  .burger-menu__label::before {
    top: 0;
    box-shadow: 0 10px 0 var(--color-primary);
  }
  .burger-menu__label::after {
    bottom: 0;
  }
  .burger-menu__label_dark::before, .burger-menu__label_dark::after {
    background: var(--color-dark-3xl);
  }
  .burger-menu__label_dark::before {
    box-shadow: 0 10px 0 var(--color-dark-3xl);
  }
}
html {
  scroll-behavior: smooth;
}

/*# sourceMappingURL=styles.cs.map */
