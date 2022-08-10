const PicturesListItem = ({ alt, url }) => {
  return (
    <li>
      <img src={url} alt={alt} width='300' />
    </li>
  );
};

export default PicturesListItem;
