import { MainLayout } from '@components/layouts/main-layout';
import { hoc } from '@utils/hoc';

const useDashboardProps = () => {};

export const Dashboard = hoc(useDashboardProps, () => {
  return (
    <>
      <MainLayout>
        <h2>Nakrutka</h2>
      </MainLayout>
    </>
  );
});
