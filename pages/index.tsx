import { withRouter, NextRouter } from 'next/router';
import Image from 'next/image';

import styles from './Home.module.scss';

type HomeProps = { router: NextRouter };

const Home = ({}: HomeProps) => (
  <div className={styles.container} style={{ height: '150vh' }}>
    <Image
      className={styles.image}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      alt="Home background"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />
  </div>
);

export default withRouter(Home);
