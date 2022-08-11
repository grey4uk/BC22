import PropTypes from 'prop-types';
import { FaReact } from 'react-icons/fa';

import './CardStyles.scss';
import css from './Card.module.css';
// console.log('css in Card :>> ', css);

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30px',
  },
};

const Card = ({ active, path }) => {
  return (
    <li className={css.container} style={styles.wrapper}>
      {/* <h2 className='title'>Card</h2> */}
      <h2 className={active ? css.active : css.title}>
        Card
        <FaReact />
      </h2>
      <img src={path} alt='img' width='400' />
    </li>
  );
};

export default Card;

Card.propTypes = { active: PropTypes.bool };
