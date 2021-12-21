import { Layout } from '@/layout';
import { withRouter, NextRouter } from 'next/router';

type SkillsProps = { router: NextRouter };

const Skills = ({ router }: SkillsProps) => <Layout router={router}>Skills</Layout>;

export default withRouter(Skills);
