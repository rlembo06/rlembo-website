import type { CardProps } from 'antd';

import { Card } from 'antd';

import styles from './Card.module.scss';

type RLCardProps = CardProps;

const RLCard = (props: RLCardProps) => <Card className={styles.container} {...props} />;

const { Grid, Meta } = Card;

RLCard.Meta = Meta;
RLCard.Grid = Grid;

export default RLCard;
