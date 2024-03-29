import { createGlobalStyle } from "styled-components"

const GlobalsStyles = createGlobalStyle`

* {
  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}

* ::-webkit-scrollbar {
  display: none !important;
  width: 0px !important;
  background: transparent !important;
}


     
    

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
input,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
button {
  margin: 0;
  padding: 0;
  border: 0;
  color: #111111;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  vertical-align: baseline;
  box-sizing: border-box;
}

html {
  height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0.4);
}

body {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 1;
  margin: 0px auto;
  -webkit-text-size-adjust: none;
  -webkit-overflow-scrolling: touch;
}

body.mobile-layout-at-desktop {
  max-width: 500px;
  margin: 0 auto;
}

body.mobile-layout-at-desktop .mobile-modal-at-desktop {
  max-width: 500px;
}

@media screen and (min-width: 500px) {
  body.mobile-layout-at-desktop .mobile-modal-at-desktop {
    left: calc(50% - 250px) !important;
  }
}

body.prevent-overflow-scroll {
  overscroll-behavior: contain;
}

#__next {
  position: relative;
  max-width: inherit;
  height: 100%;
}

.activate-pointer-event {
  pointer-events: auto;
}

.scrollable {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
  color: #000;
}

img {
  user-drag: none;
  -webkit-user-drag: none;
  /* width: 100%; */
}

input::-ms-clear {
  display: none;
}

.react-loading-skeleton {
  display: block !important;
}

/* .text-ellipsis{
      overflow:hidden; 
      text-overflow:ellipsis; 
      white-space:nowrap;
    } */

.Toastify {
  width: 100% !important;
  max-width: inherit;
  z-index: 10000;
}

.css-fx-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.css-fx-ali-center {
  display: flex;
  align-items: center;
}

.line-clamp-1,
.line-clamp-2,
.line-clamp-3,
.line-clamp-4,
.line-clamp-5 {
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  -webkit-line-clamp: 2;
}

.line-clamp-3 {
  -webkit-line-clamp: 3;
}

.line-clamp-4 {
  -webkit-line-clamp: 4;
}

.line-clamp-5 {
  -webkit-line-clamp: 5;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}



`

export default GlobalsStyles
