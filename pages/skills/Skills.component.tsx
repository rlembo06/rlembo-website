import { withRouter, NextRouter } from 'next/router';

type SkillsProps = { router: NextRouter };

const Skills = ({}: SkillsProps) => <div style={{ height: '150vh' }}>Skills</div>;

export default withRouter(Skills);
