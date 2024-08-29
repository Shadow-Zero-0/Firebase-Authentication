import  '../Acetylate the parts/footer.css';
import  '../Acetylate the parts/Allstyle.css';
import { useContext } from 'react';
import ThemeContext from "../datadarkmode";
const Footer = ({props}) => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={`footersection ${mode}`}>
      <p>The website was created and developed by Shadow <span>&#129505;</span></p>
    </div>
  );
}

export default Footer;
