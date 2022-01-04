import { withRouter, NextRouter } from 'next/router';
import Image from 'next/image';

import styles from './Home.module.less';

type HomeProps = { router: NextRouter };

const Home = ({}: HomeProps) => (
  <div className={styles.container}>
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
