import { withRouter, NextRouter } from 'next/router';

import { Layout } from '@/layout';

type HomeProps = { router: NextRouter };

const Home = ({ router }: HomeProps) => <Layout router={router}>Home</Layout>;

export default withRouter(Home);
