import useSWR from 'swr';

import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
  const { user } = useAuth();

  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

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
