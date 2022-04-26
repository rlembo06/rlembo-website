
import { useEffect } from 'react';
import { withRouter, NextRouter } from 'next/router';
import Image from 'next/image';

import { notionApi } from './api'
import styles from './Home.module.scss';

type HomeProps = { router: NextRouter };

const Home = ({ skills }: HomeProps) => {
  console.log('?????????? HOME ??????? ', { skills })
  return (
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
}

export async function getStaticProps() {
  const skills = await notionApi.fetchSkills();
  return {
    props: { skills },
    revalidate: 1,
  };
}

export default withRouter(Home);
