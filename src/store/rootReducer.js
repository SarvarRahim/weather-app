import { authReducer } from '@auth/store';
import { dashboardReducer } from '@dashboard/store';
import { commonReducer } from './common';

export const rootReducer = {
  auth: authReducer,
  dashboard: dashboardReducer,
  common: commonReducer
};
