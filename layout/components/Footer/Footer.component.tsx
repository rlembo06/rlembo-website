import type { LayoutProps as ALayoutProps } from 'antd';

import { Layout } from 'antd';

import styles from './Footer.module.less';

const { Footer: AFooter } = Layout;

type FooterProps = ALayoutProps;

const Footer = ({}: FooterProps) => <AFooter className={styles.container}>RL Website</AFooter>;

export default Footer;
