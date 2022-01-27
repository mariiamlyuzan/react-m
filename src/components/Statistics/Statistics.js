import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title = '',stats ,
 
}) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  return (
<section className={s.statistics}>
  {title && <h2 className={s.title}>Upload stats</h2>}

  <ul className={s.statList}>
    {stats.map(stat => (
    <li key={stat.id} className={s.item} style={{backgroundColor:getRandomHexColor()}}>
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}%</span>
    </li>
    ))
}
  </ul>
</section>
  )
  }

Statistics.propTypes = {
 title: PropTypes.string.isRequired,
 stats: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    
  }),
 )
};

export default Statistics;