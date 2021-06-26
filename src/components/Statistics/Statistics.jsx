import PropTypes from "prop-types";
import s from './Statistics.module.css';
import pastelColors from "../../utils/colorRandom";

export default function Statistics (props) {
    const {title, stats}= props;
    return (

<section className={s.statistics}>
  <h2 className={s.title}>{title}</h2>

  <ul className={s.statList}>
      {stats.map(({id, label, percentage}) =>
      <li key={id}
        className={s.item}
        style={{ backgroundColor: pastelColors() }}>
           <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
      </li>
      )}
  </ul>
</section>)};

Statistics.defaultProps = {
    title: "",
  };
  Statistics.propTypes = {
      title: PropTypes.string,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
          })
      ).isRequired,
  };