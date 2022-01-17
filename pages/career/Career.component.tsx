import { withRouter, NextRouter } from 'next/router';
import { Skeleton, Descriptions, Tabs } from 'antd';

import type { CareerType } from '@/types';

import { RLCard, RLTimeline } from '@/components';
import { career } from '@/resources';

type CareerProps = { router: NextRouter };

const Career = ({}: CareerProps) => {
  const isFetching: boolean = false;
  return (
    <RLTimeline>
      {(career.list || []).map((item: CareerType.Item) => (
        <RLTimeline.Item key={item.company}>
          <RLCard
            title={item.position}
            bordered={false}
            loading={isFetching}
            headStyle={{ color: 'var(--text-color)' }}
          >
            <Skeleton loading={isFetching} avatar active>
              <Tabs defaultActiveKey="1" tabPosition="right">
                <Tabs.TabPane key="1" tab="Stack">
                  <Descriptions
                    title={item.company}
                    layout="horizontal"
                    contentStyle={{ color: 'var(--text-color)' }}
                    labelStyle={{ color: 'var(--text-color)' }}
                  >
                    <Descriptions.Item label="Stack">
                      <code>{JSON.stringify(item.stack)}</code>
                    </Descriptions.Item>
                  </Descriptions>
                </Tabs.TabPane>
                <Tabs.TabPane key="2" tab="Information">
                  <Descriptions
                    title={item.company}
                    layout="horizontal"
                    contentStyle={{ color: 'var(--text-color)' }}
                    labelStyle={{ color: 'var(--text-color)' }}
                  >
                    <Descriptions.Item label="Start at">{item.startDate}</Descriptions.Item>
                    <Descriptions.Item label="End at">
                      {item.endDate || 'Current'}
                    </Descriptions.Item>
                    <Descriptions.Item label="Description">{item.description}</Descriptions.Item>
                  </Descriptions>
                </Tabs.TabPane>
              </Tabs>
            </Skeleton>
          </RLCard>
        </RLTimeline.Item>
      ))}
    </RLTimeline>
  );
};

export default withRouter(Career);
