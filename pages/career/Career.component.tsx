import { withRouter, NextRouter } from 'next/router';
import { Skeleton } from 'antd';

import type { CareerType } from '@/types';

import { RLCard, RLTimeline } from '@/components';
import { career } from '@/resources';

type CareerProps = { router: NextRouter };

const Career = ({}: CareerProps) => {
  const isFetching: boolean = false;
  return (
    <RLTimeline>
      {(career.list || []).map((item: CareerType.Item) => (
        <RLTimeline.Item key={item.label}>
          <RLCard title={item.label} bordered={false} loading={isFetching}>
            <Skeleton loading={isFetching} avatar active>
              <p>{item.position}</p>
            </Skeleton>
          </RLCard>
        </RLTimeline.Item>
      ))}
    </RLTimeline>
  );
};

export default withRouter(Career);
