import Head from 'next/head';
import { Box, Button, Code, Flex, Heading, Icon, Text } from '@chakra-ui/core';
import useSWR from 'swr';

import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
  const auth = useAuth();

  const { data } = useSWR('/api/sites', fetcher);

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />;
      </DashboardShell>
    );
  }

  // if (!auth.user) {
  // }

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
