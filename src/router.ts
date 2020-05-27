import { RouteProps } from 'react-router';
import * as Containers from './container';
function routes(props:RouteProps):Array<RouteProps>{
  const path:any = props.path
  return [{
    path:`${path}`,
    exact:true,
    component:Containers.ListContainer
  },{
    path:`${path}/add`,
    component:Containers.FormContainer
  },{
    path:`${path}:id/edit`,
    component:Containers.FormContainer
  },{
    path:`${path}:id`,
    component:Containers.DetailContainer
  }]
}
export default routes
