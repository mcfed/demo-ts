import React from 'react';
import LeftRightRouter from './LeftRightRouter';
import AsyncComponent from './AsyncComponent';
// import FullScreenRouter from './FullScreenRouter'
import Loadable from 'react-loadable';
import {Spin} from 'antd';
import {storeManager} from '../stateconfig/reducer';

import InfoCenter from '../pages/personal/infocenter/index';
import InfoCenterSetting from '../pages/personal/infocenter/setting';
import PasswordChangePage from '../pages/personal/password/index';

const HomePage = AsyncComponent(() => import('../pages/home/index'));
const BusinessSystem = AsyncComponent(() =>
  import('../pages/settings/business_system/index')
);
const ResourcesSetting = AsyncComponent(() =>
  import('../pages/settings/business_system/ResourcesPage')
);
const SwitchSettingPage = AsyncComponent(() =>
  import('../pages/settings/switch/index')
);
const CreateSwitchSetting = AsyncComponent(() =>
  import('../pages/settings/switch/CreateSwitchSetting')
);
const EditSwitchSetting = AsyncComponent(() =>
  import('../pages/settings/switch/EditSwitchSetting')
);
const FastSwitchGroupSettingPage = AsyncComponent(() =>
  import('../pages/settings/fast_switch_group/index')
);
const FastCreateSwitchGroupSetting = AsyncComponent(() =>
  import('../pages/settings/fast_switch_group/CreateSwitchSetting')
);
const FastEditSwitchGroupSetting = AsyncComponent(() =>
  import('../pages/settings/fast_switch_group/EditSwitchSetting')
);
const FastSwitchSettingPage = AsyncComponent(() =>
  import('../pages/settings/fast_switch/index')
);
const FastCreateSwitchSetting = AsyncComponent(() =>
  import('../pages/settings/fast_switch/CreateSwitchSetting')
);
const FastEditSwitchSetting = AsyncComponent(() =>
  import('../pages/settings/fast_switch/EditSwitchSetting')
);
const AlarmPage = AsyncComponent(() => import('../pages/settings/alarm/index'));
const AlarmSetting = AsyncComponent(() =>
  import('../pages/settings/alarm/EditAlarmSetting')
);
const CreateAlarmSetting = AsyncComponent(() =>
  import('../pages/settings/alarm/CreateAlarmSetting')
);

const DisasterTolerancePage = AsyncComponent(() =>
  import('../pages/operation/disaster_tolerance')
);
const DisasterToleranceOperationPage = AsyncComponent(() =>
  import('../pages/operation/disaster_tolerance/DisasterToleranceOperation')
);
const FastSwitchPage = AsyncComponent(() =>
  import('../pages/operation/fast_switch')
);
const FastSwitchOperationPage = AsyncComponent(() =>
  import('../pages/operation/fast_switch/SwitchOperation')
);
const RecoveryOperationPage = AsyncComponent(() =>
  import('../pages/operation/recovery_operation')
);
const CopyOnLog = AsyncComponent(() =>
  import('../pages/operation/copy_on_log')
);
const DesktopWalkthrough = AsyncComponent(() =>
  import('../pages/operation/desktop_walkthrough')
);
const DatabaseReadOnlyPage = AsyncComponent(() =>
  import('../pages/operation/database_readonly')
);
const TimingSyncPage = AsyncComponent(() =>
  import('../pages/operation/timing_sync')
);

const AgentPage = AsyncComponent(() => import('../pages/operation/agent'));
const BusinessSystemPage = AsyncComponent(() =>
  import('../pages/business_system/')
);
const BusinessSystemViewPage = AsyncComponent(() =>
  import('../pages/business_system/business_system_info')
);
const ResourcePage = AsyncComponent(() =>
  import('../pages/business_system/resource_info')
);
const OperationLogPage = AsyncComponent(() =>
  import('../pages/log/operation_log')
);
const AlarmLogPage = AsyncComponent(() => import('../pages/log/alarm_log'));
const SlaveAutomationLog = AsyncComponent(() =>
  import('../pages/log/slaveAutomation_log')
);
const DesktopWalkthroughLog = AsyncComponent(() =>
  import('../pages/log/desktop_walkthrough')
);
const RecoveryOperationLog = AsyncComponent(() =>
  import('../pages/log/recovery_operation')
);

const AgentDeploy = AsyncComponent(() => import('../pages/deploy/agent'));
const SlaveAutomation = AsyncComponent(() =>
  import('../pages/deploy/slaveAutomation')
);

const BigScreen = AsyncComponent(() => import('../pages/big_screen'));
// const LargeScreenSingle = AsyncComponent(() => import('../pages/large_screen_single'));

const PermissionDeniedPage = AsyncComponent(() =>
  import('../pages/permission_denied')
);

const Loading = () => (
  <div>
    <Spin />
  </div>
);

// const DepartmentPage = Loadable({
//   loader: () => import('../pages/manage/departments/index'),
//   loading: Loading
// })
// const DepartmentPageModify = Loadable({
//   loader: () => import('../pages/manage/departments/modify'),
//   loading: Loading
// })

const routes = [
  {
    path: '/app',
    component: HomePage,
    name: '首页',
    exact: true,
    id: '10000000000000000000000000000001'
  },
  {
    path: '/app/settings',
    component: LeftRightRouter,
    name: '配置',
    id: '10000000000000000000000000000002',
    routes: [
      {
        path: '/app/settings/business_system',
        component: BusinessSystem,
        name: '业务系统配置',
        // exact: true,
        leftNav: true,
        routes: [
          {
            path: '/app/settings/business_system/resources/:id',
            component: ResourcesSetting,
            name: '资源配置'
          }
        ]
      },
      {
        path: '/app/settings/switch',
        component: SwitchSettingPage,
        name: '切换配置',
        leftNav: true,
        routes: [
          {
            path: '/app/settings/switch/setting/add',
            component: CreateSwitchSetting,
            name: '新增切换操作配置'
          },
          {
            path: '/app/settings/switch/setting/:id',
            component: EditSwitchSetting,
            name: '编辑切换操作配置'
          }
        ]
      },
      {
        path: '/app/settings/alarm',
        component: AlarmPage,
        name: '告警配置',
        leftNav: true,
        routes: [
          {
            path: '/app/settings/alarm/setting/add',
            component: CreateAlarmSetting,
            name: '新增告警配置'
          },
          {
            path: '/app/settings/alarm/setting/:id',
            component: AlarmSetting,
            name: '编辑告警配置'
          }
        ]
      },
      {
        path: '/app/settings/fast_switch_group',
        component: FastSwitchGroupSettingPage,
        name: '一键切换流程组配置',
        leftNav: true,
        routes: [
          {
            path: '/app/settings/fast_switch_group/setting/add',
            component: FastCreateSwitchGroupSetting,
            name: '新增一键切换流程组配置'
          },
          {
            path: '/app/settings/fast_switch_group/setting/:id',
            component: FastEditSwitchGroupSetting,
            name: '编辑一键切换流程组配置'
          }
        ]
      },
      {
        path: '/app/settings/fast_switch',
        component: FastSwitchSettingPage,
        name: '一键切换配置',
        leftNav: true,
        routes: [
          {
            path: '/app/settings/fast_switch/setting/add',
            component: FastCreateSwitchSetting,
            name: '新增一键切换操作配置'
          },
          {
            path: '/app/settings/fast_switch/setting/:id',
            component: FastEditSwitchSetting,
            name: '编辑一键切换操作配置'
          }
        ]
      },
      {
        path: '/app/settings/resourceCheck',
        // component: Loadable({
        //   loader: () => storeManager.importModule(import("../modules/resourceCheck")),
        //   loading: Loading,
        // }),
        component: Loadable({
          loader: () => import('../pages/settings/resource_config_view'),
          loading: Loading
        }),
        name: '资源配置检查',
        leftNav: true
      },
      {
        redirect: true,
        path: '/app/settings',
        to: '/app/settings/business_system'
      }
    ]
  },
  {
    // id: 2,
    path: '/app/operation',
    component: LeftRightRouter,
    name: '操作',
    id: '10000000000000000000000000000003',
    routes: [
      {
        path: '/app/operation/disaster_tolerance',
        component: DisasterTolerancePage,
        name: '容灾操作',
        leftNav: true,
        routes: [
          {
            path: '/app/operation/disaster_tolerance/switch/:id',
            component: DisasterToleranceOperationPage,
            name: '容灾切换操作'
          },
          {
            path: '/app/operation/disaster_tolerance/permission_denied',
            component: PermissionDeniedPage,
            name: '容灾操作权限'
          }
        ]
      },
      {
        path: '/app/operation/fast_switch',
        component: FastSwitchPage,
        name: '一键操作',
        leftNav: true,
        routes: [
          {
            path: '/app/operation/fast_switch/switch/:id',
            component: FastSwitchOperationPage,
            name: '一键切换操作'
          },
          {
            path: '/app/operation/fast_switch/permission_denied',
            component: PermissionDeniedPage,
            name: '切换操作权限'
          }
        ]
      },
      {
        path: '/app/operation/agent',
        component: AgentPage,
        name: 'agent服务操作',
        leftNav: true
      },
      {
        path: '/app/operation/desktop_walkthrough',
        component: DesktopWalkthrough,
        name: '桌面演练',
        leftNav: true
      },
      {
        path: '/app/operation/copy_on_log',
        component: CopyOnLog,
        name: '数据库传输模式切换',
        leftNav: true
      },
      {
        path: '/app/operation/recovery',
        component: RecoveryOperationPage,
        name: '误操作恢复',
        leftNav: true
      },
      {
        path: '/app/operation/database_readonly',
        component: DatabaseReadOnlyPage,
        name: '活动站点',
        leftNav: true
      },
      {
        path: '/app/operation/timing_sync',
        component: TimingSyncPage,
        name: '定时同步',
        leftNav: true
      },
      {
        path: '/app/operation/resource_sync',
        component: Loadable({
          loader: () => import('../pages/operation/resource_sync'),
          loading: Loading
        }),
        name: '资源同步状态',
        leftNav: true
      },
      {
        redirect: true,
        path: '/app/operation',
        to: '/app/operation/disaster_tolerance'
      }
    ]
  },
  {
    // id: 2,
    path: '/app/business_system',
    component: LeftRightRouter,
    name: '业务系统',
    id: '10000000000000000000000000000004',
    routes: [
      {
        path: '/app/business_system/home',
        component: BusinessSystemPage,
        hide: true,
        name: ''
      },
      {
        path: '/app/business_system/view/:id',
        component: BusinessSystemViewPage,
        name: '业务系统信息查看'
      },
      {
        path: '/app/business_system/resources/view',
        component: ResourcePage,
        name: '资源信息查看'
      },
      {
        redirect: true,
        path: '/app/business_system',
        to: '/app/business_system/home'
      }
    ]
  },
  {
    // id: 2,
    path: '/app/log',
    component: LeftRightRouter,
    name: '日志',
    id: '10000000000000000000000000000005',
    routes: [
      {
        path: '/app/log/operationlog',
        component: OperationLogPage,
        name: '操作日志',
        leftNav: true
      },
      {
        path: '/app/log/alarmlog',
        component: AlarmLogPage,
        name: '告警日志',
        leftNav: true
      },
      {
        path: '/app/log/slaveautomationlog',
        component: SlaveAutomationLog,
        name: '从机自动化日志',
        leftNav: true
      },
      {
        path: '/app/log/desktopWalkthroughLog',
        component: DesktopWalkthroughLog,
        name: '桌面演练日志',
        leftNav: true
      },
      {
        path: '/app/log/recovery_operation',
        component: RecoveryOperationLog,
        name: '误操作恢复日志',
        leftNav: true
      },
      {
        redirect: true,
        path: '/app/log',
        to: '/app/log/operationlog'
      }
    ]
  },
  {
    name: '个人中心',
    path: '/app/personal',
    // id: "10000000000000000000000000000009",
    component: LeftRightRouter,
    hideInMenu: true,
    routes: [
      {
        path: '/app/personal/infocenter',
        component: InfoCenter,
        name: '个人信息',
        exact: true,
        leftNav: true
      },
      {
        path: '/app/personal/infocenter/setting',
        component: InfoCenterSetting,
        name: '编辑'
      },
      {
        path: '/app/personal/password',
        component: PasswordChangePage,
        name: '修改密码',
        leftNav: true
      },
      {
        redirect: true,
        path: '/app/personal',
        to: '/app/personal/infocenter'
      }
    ]
  },
  {
    path: '/app/deploy',
    component: LeftRightRouter,
    name: '部署',
    id: '10000000000000000000000000000006',
    routes: [
      {
        path: '/app/deploy/agent',
        component: AgentDeploy,
        name: 'agent部署',
        leftNav: true
      },
      {
        path: '/app/deploy/slaveautomation',
        component: SlaveAutomation,
        name: '从机自动化部署',
        leftNav: true
      },
      {
        redirect: true,
        path: '/app/deploy',
        to: '/app/deploy/agent'
      }
    ]
  },
  // {
  //   path: '/app/big_screen',
  //   component: BigScreen,
  //   name: '大屏',
  //   id: '10000000000000000000000000000007',
  //   exact: true
  // },
  {
    path: '/app/manage',
    component: LeftRightRouter,
    name: '系统管理',
    id: '10000000000000000000000000000008',
    routes: [
      {
        path: '/app/manage/setting',
        component: Loadable({
          loader: () => import('../pages/manage/users/index'),
          loading: Loading
        }),
        name: '用户设置',
        exact: true,
        leftNav: true
      },
      {
        path: '/app/manage/setting/editUser',
        component: Loadable({
          loader: () => import('../pages/manage/users/setting'),
          loading: Loading
        }),
        name: '用户修改'
      },
      {
        path: '/app/manage/setting/addUser',
        component: Loadable({
          loader: () => import('../pages/manage/users/UserAddPage'),
          loading: Loading
        }),
        name: '用户新增'
      },
      {
        path: '/app/manage/roles',
        component: Loadable({
          loader: () => import('../pages/manage/roles/index'),
          loading: Loading
        }),
        exact: true,
        name: '角色管理',
        leftNav: true
      },
      {
        path: '/app/manage/systemLog',
        component: Loadable({
          loader: () => import('../pages/manage/system_log'),
          loading: Loading
        }),
        exact: true,
        name: '系统日志',
        leftNav: true
      },
      {
        path: '/app/manage/whiteName',
        component: Loadable({
          loader: () =>
            storeManager.importModule(import('../modules/whiteName')),
          loading: Loading
        }),
        // exact: true,
        name: 'whiteName',
        leftNav: false
      },
      {
        path: '/app/manage/roles/setting',
        component: Loadable({
          loader: () => import('../pages/manage/roles/setting'),
          loading: Loading
        }),
        exact: true,
        name: '角色权限'
      },
      {
        path: '/app/manage/roles/detail',
        component: Loadable({
          loader: () => import('../pages/manage/roles/setting'),
          loading: Loading
        }),
        exact: true,
        name: '角色查看'
      },
      {
        path: '/app/manage/license',
        component: Loadable({
          loader: () => import('../pages/manage/license'),
          loading: Loading
        }),
        leftNav: true,
        name: 'license管理'
      },
      {
        path: '/app/manage/alarm',
        component: Loadable({
          loader: () => import('../pages/manage/alarm_setting'),
          loading: Loading
        }),
        leftNav: true,
        name: '告警方式配置'
      },
      {
        path: '/app/manage/systemSetting',
        component: Loadable({
          loader: () => import('../pages/manage/system_setting'),
          loading: Loading
        }),
        leftNav: true,
        childNav: true,
        name: '系统配置',
        routes: [
          {
            path: '/app/manage/systemSetting/common',
            component: Loadable({
              loader: () => import('../pages/manage/system_setting/common'),
              loading: Loading
            }),
            leftNav: true,
            name: '系统、登陆配置'
          },
          {
            path: '/app/manage/systemSetting/largeScreen',
            component: Loadable({
              loader: () =>
                import('../pages/manage/system_setting/largeScreen'),
              loading: Loading
            }),
            leftNav: true,
            name: '大屏配置'
          }
        ]
      },
      {
        redirect: true,
        path: '/app/manage',
        to: '/app/manage/setting'
      }
    ]
  }
];

export default routes;
