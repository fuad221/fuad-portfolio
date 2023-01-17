import mc from "./Experience.module.css";
import { useAppSelector } from "../../store/hooks";


const Experience = () => {
const isDark= useAppSelector((state) => state.darkMode.isDarkMode)

  return (
    <div className={mc.experience} id='experience'>
      <div className={mc.achievement}>
        {/* darkMode */}
        <div className={mc.circle} style={{color: isDark?'var(--orange)':''}}>1+</div>
        <span  style={{color: isDark?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className={mc.achievement}>
        <div className={mc.circle} style={{color: isDark?'var(--orange)':''}}>5+</div>
        <span  style={{color: isDark?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className={mc.achievement}>
        <div className={mc.circle} style={{color: isDark?'var(--orange)':''}}>1+</div>
        <span  style={{color: isDark?'white':''}}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
