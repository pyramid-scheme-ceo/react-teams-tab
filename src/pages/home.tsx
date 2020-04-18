import React from 'react';
import { Grid, Segment } from '@fluentui/react-northstar';
import { PageTitle, VerticalMenu } from '../components/shared';
import { HomeMenuItems } from '../config';

export default function Home() {
  return (
    <Grid columns="repeat(12, 1fr)">
      <Segment content={<PageTitle title="Our new Teams app" icon="teams" />} styles={{ gridColumn: 'span 2' }} />
      <Segment styles={{ gridColumn: 'span 10' }} />
      <VerticalMenu menuWidth={2} menuItems={HomeMenuItems} />
    </Grid>
  );
}