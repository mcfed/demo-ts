import React from 'react'
import LeftRightRouter from './LeftRightRouter'
import AsyncComponent from './AsyncComponent'
// import FullScreenRouter from './FullScreenRouter'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
import {storeManager} from '../stateconfig/reducer'

import InfoCenter from '../pages/personal/infocenter/index'
import InfoCenterSetting from '../pages/personal/infocenter/setting'
import PasswordChangePage from '../pages/personal/password/index'

const HomePage = AsyncComponent(() => import('../pages/home/index'));
const BusinessSystem = AsyncComponent(() => import('../pages/settings/business_system/index'));
const ResourcesSetting = AsyncComponent(() => import('../pages/settings/business_system/ResourcesPage'));
const SwitchSettingPage = AsyncComponent(() => import('../pages/settings/switch/index'));
const CreateSwitchSetting = AsyncComponent(() => import('../pages/settings/switch/CreateSwitchSetting'));
const EditSwitchSetting = AsyncComponent(() => import('../pages/settings/switch/EditSwitchSetting'));
const FastSwitchSettingPage = AsyncComponent(() => import('../pages/settings/fast_switch/index'));
const FastCreateSwitchSetting = AsyncComponent(() => import('../pages/settings/fast_switch/CreateSwitchSetting'));
const FastEditSwitchSetting = AsyncComponent(() => import('../pages/settings/fast_switch/EditSwitchSetting'));
const AlarmPage = AsyncComponent(() => import('../pages/settings/alarm/index'));
const AlarmSetting = AsyncComponent(() => import('../pages/settings/alarm/EditAlarmSetting'));
const CreateAlarmSetting = AsyncComponent(() => import('../pages/settings/alarm/CreateAlarmSetting'));

const DisasterTolerancePage = AsyncComponent(() => import('../pages/operation/disaster_tolerance'));
const DisasterToleranceOperationPage = AsyncComponent(() => import('../pages/operation/disaster_tolerance/DisasterToleranceOperation'));
const FastSwitchPage = AsyncComponent(() => import('../pages/operation/fast_switch'));
const FastSwitchOperationPage = AsyncComponent(() => import('../pages/operation/fast_switch/SwitchOperation'));
const RecoveryOperationPage = AsyncComponent(() => import('../pages/operation/recovery_operation'));
const CopyOnLog = AsyncComponent(() => import('../pages/operation/copy_on_log'))
const DesktopWalkthrough = AsyncComponent(() => import('../pages/operation/desktop_walkthrough'))
const DatabaseReadOnlyPage = AsyncComponent(() => import('../pages/operation/database_readonly'))
const TimingSyncPage = AsyncComponent(() => import('../pages/operation/timing_sync'))

const AgentPage = AsyncComponent(() => import('../pages/operation/agent'));
const BusinessSystemPage = AsyncComponent(() => import('../pages/business_system/'));
const BusinessSystemViewPage = AsyncComponent(() => import('../pages/business_system/business_system_info'));
const ResourcePage = AsyncComponent(() => import('../pages/business_system/resource_info'));
const OperationLogPage = AsyncComponent(() => import('../pages/log/operation_log'));
const AlarmLogPage = AsyncComponent(() => import('../pages/log/alarm_log'));
const SlaveAutomationLog = AsyncComponent(() => import('../pages/log/slaveAutomation_log'));
const DesktopWalkthroughLog = AsyncComponent(() => import('../pages/log/desktop_walkthrough'));
const RecoveryOperationLog = AsyncComponent(() => import('../pages/log/recovery_operation'));

const AgentDeploy = AsyncComponent(() => import('../pages/deploy/agent'));
const SlaveAutomation = AsyncComponent(() => import('../pages/deploy/slaveAutomation'));

const BigScreen = AsyncComponent(() => import('../pages/big_screen'));

const PermissionDeniedPage = AsyncComponent(() => import('../pages/permission_denied'));

const Loading = () =>(
  <div><Spin/></div>
)
const UsersPage = Loadable({
  loader: () => import('../pages/manage/users/index'),
  loading: Loading
})
const UsersSettingPage = Loadable({
  loader: () => import('../pages/manage/users/setting'),
  loading: Loading
})
const UserAddPage = Loadable({
  loader: () => import('../pages/manage/users/UserAddPage'),
  loading: Loading
})
const RolesPage = Loadable({
  loader: () => import('../pages/manage/roles/index'),
  loading: Loading
})
const RolesSettingPage = Loadable({
  loader: () => import('../pages/manage/roles/setting'),
  loading: Loading
})
// const DepartmentPage = Loadable({
//   loader: () => import('../pages/manage/departments/index'),
//   loading: Loading
// })
// const DepartmentPageModify = Loadable({
//   loader: () => import('../pages/manage/departments/modify'),
//   loading: Loading
// })
const LicensePage = Loadable({
  loader: () => import('../pages/manage/license'),
  loading: Loading
})
const alarmSettingPage = Loadable({
  loader: () => import('../pages/manage/alarm_setting'),
  loading: Loading
})


const routes = [
  {
    path: '/app',
    component: HomePage,
    name: '首页',
    exact: true,
    id: "10000000000000000000000000000001"
  },
  {
    path: '/app/settings',
    component: LeftRightRouter,
    name: '配置',
    id: "10000000000000000000000000000002",
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
            name: '资源配置',
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
            name: '新增切换操作配置',
          },
          {
            path: '/app/settings/switch/setting/:id',
            component: EditSwitchSetting,
            name: '编辑切换操作配置',
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
            name: '新增告警配置',
          },
          {
            path: '/app/settings/alarm/setting/:id',
            component: AlarmSetting,
            name: '编辑告警配置',
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
            name: '新增一键切换操作配置',
          },
          {
            path: '/app/settings/fast_switch/setting/:id',
            component: FastEditSwitchSetting,
            name: '编辑一键切换操作配置',
          }
        ]
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
    id: "10000000000000000000000000000003",
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
            name: '容灾切换操作',
          },
          {
            path: '/app/operation/disaster_tolerance/permission_denied',
            component: PermissionDeniedPage,
            name: '容灾操作权限',
          }
        ]
      },
      {
        path: '/app/operation/fast_switch',
        component: FastSwitchPage,
        name: '一键切换操作列表',
        leftNav: true,
        routes: [
          {
            path: '/app/operation/fast_switch/switch/:id',
            component: FastSwitchOperationPage,
            name: '一键切换操作',
          },
          {
            path: '/app/operation/fast_switch/permission_denied',
            component: PermissionDeniedPage,
            name: '切换操作权限',
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
    id: "10000000000000000000000000000004",
    routes: [
      {
        path: '/app/business_system/home',
        component: BusinessSystemPage,
        hide: true,
        name: '',
      },
      {
        path: '/app/business_system/view/:id',
        component: BusinessSystemViewPage,
        name: '业务系统信息查看',
      },
      {
        path: '/app/business_system/resources/view',
        component: ResourcePage,
        name: '资源信息查看',
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
    id: "10000000000000000000000000000005",
    routes: [
      {
        path: '/app/log/operationlog',
        component: OperationLogPage,
        name: '操作日志',
        leftNav: true,
      },
      {
        path: '/app/log/alarmlog',
        component: AlarmLogPage,
        name: '告警日志',
        leftNav: true,
      },
      {
        path: '/app/log/slaveautomationlog',
        component: SlaveAutomationLog,
        name: '从机自动化日志',
        leftNav: true,
      },
      {
        path: '/app/log/desktopWalkthroughLog',
        component: DesktopWalkthroughLog,
        name: '桌面演练日志',
        leftNav: true,
      },
      {
        path: '/app/log/recovery_operation',
        component: RecoveryOperationLog,
        name: '误操作恢复日志',
        leftNav: true,
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
    id: "10000000000000000000000000000006",
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
  {
    path: '/app/big_screen',
    component: BigScreen,
    name: '大屏',
    id: "10000000000000000000000000000007",
    exact: true
  },
  {
    path: '/app/manage',
    component: LeftRightRouter,
    name: '系统管理',
    id: "10000000000000000000000000000008",
    routes: [
      {
        path: '/app/manage/setting',
        component: UsersPage,
        name: '用户设置',
        exact: true,
        leftNav: true
      },
      {
        path: '/app/manage/setting/editUser',
        component: UsersSettingPage,
        name: '用户修改'
      },
      {
        path: '/app/manage/setting/addUser',
        component: UserAddPage,
        name: '用户新增'
      },
      {
        path: '/app/manage/roles',
        component: RolesPage,
        exact: true,
        name: '角色管理',
        leftNav: true
      },
      {
        path: '/app/manage/whiteName',
        component: Loadable({
          loader: () => storeManager.importModule(import("../modules/whiteName")),
          loading: Loading,
        }),
        // exact: true,
        name: 'whiteName',
        leftNav:false 
      },

      {
        path: '/app/manage/roles/setting',
        component: RolesSettingPage,
        exact: true,
        name: '角色权限'
      },
      {
        path: '/app/manage/roles/detail',
        component: RolesSettingPage,
        exact: true,
        name: '角色查看'
      },
      // {
      //   path: '/app/manage/departments',
      //   component: DepartmentPage,
      //   exact: true,
      //   leftNav: true,
      //   name: '部门管理'
      // },
      // {
      //   path: '/app/manage/departments/edit/:id',
      //   component: DepartmentPageModify,
      //   name: '部门修改'
      // },
      {
        path: '/app/manage/license',
        component: LicensePage,
        leftNav: true,
        name: 'license管理'
      },
      {
        path: '/app/manage/alarm',
        component: alarmSettingPage,
        leftNav: true,
        name: '告警方式配置'
      },
      {
        redirect: true,
        path: '/app/manage',
        to: '/app/manage/setting'
      }
    ]
  },
]

export default routes
