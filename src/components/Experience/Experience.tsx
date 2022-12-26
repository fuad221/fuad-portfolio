
import classes from "./Experience.module.css";
import { useAppSelector } from "../../store/hooks";


const Experience: React.FC = () => {
const isDark= useAppSelector((state) => state.darkMode.isDarkMode)

  return (
    <div className={classes.experience} id='experience'>
      <div className={classes.achievement}>
        {/* darkMode */}
        <div className={classes.circle} style={{color: isDark?'var(--orange)':''}}>1+</div>
        <span  style={{color: isDark?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className={classes.achievement}>
        <div className={classes.circle} style={{color: isDark?'var(--orange)':''}}>5+</div>
        <span  style={{color: isDark?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className={classes.achievement}>
        <div className={classes.circle} style={{color: isDark?'var(--orange)':''}}>1+</div>
        <span  style={{color: isDark?'white':''}}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
