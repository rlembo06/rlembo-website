import { withRouter, NextRouter } from 'next/router';

type HomeProps = { router: NextRouter };

const Home = ({}: HomeProps) => <>Home</>;

export default withRouter(Home);
