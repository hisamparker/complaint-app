import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,

html,
body,
button,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
a,
address,
img,
strong,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
table,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
footer,
header,
main,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

/* global styles - how i do this better?*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Source Sans Pro', sans-serif;
}

body {
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.onBackground};
  font-family: 'Lato', sans-serif;
  font-weight: light;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.onBackground};
}

.sr-only {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
`;
