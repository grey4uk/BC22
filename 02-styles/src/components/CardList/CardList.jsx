import Card from 'components/Card/Card';
import cards from 'db/mockData';
import { List } from './CardList.styled';

const CardList = () => {
  return (
    <List init={30}>
      {cards.map(({ url, id }) => (
        <Card path={url} key={id} />
      ))}
    </List>
  );
};

export default CardList;
