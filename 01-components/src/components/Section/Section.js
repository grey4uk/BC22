import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  //   console.log('children', children);
  return (
    <div>
      {title && <h3>{title}</h3>}
      {children ? children : null}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
