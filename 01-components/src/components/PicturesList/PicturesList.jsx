import PropTypes from 'prop-types';

import Section from 'components/Section/Section';
import PicturesListItem from 'components/PicturesListItem';

export const PicturesList = (props) => {
  console.log('props :>> ', props);
  const { images } = props;
  return (
    <Section title='Pictures List'>
      <ul>
        {images.map((el) => {
          const { id, alt, url } = el;
          return (
            <PicturesListItem
              key={id}
              alt={alt}
              url={url}
            />
          );
        })}
      </ul>
    </Section>
  );
};

// export default PicturesList;

PicturesList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};
