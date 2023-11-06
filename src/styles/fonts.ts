import MontserratBold from '../../public/assets/fonts/Montserrat-Bold.woff'
import MontserratBold2 from '../../public/assets/fonts/Montserrat-Bold.woff2'
import MontserratMedium from '../../public/assets/fonts/Montserrat-Medium.woff'
import MontserratMedium2 from '../../public/assets/fonts/Montserrat-Medium.woff2'

const FONTS = `
  @font-face {
    font-family: 'Montserrat';
    font-weight: 500;
    src: url(${MontserratMedium}) format('woff'),
          url(${MontserratMedium2}) format('woff2');
  };
  
  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    src: url(${MontserratBold}) format('woff'),
          url(${MontserratBold2}) format('woff2');
  };
`

export default FONTS
