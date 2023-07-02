import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className="style.section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
