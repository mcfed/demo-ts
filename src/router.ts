import * as Containers from './container';
function routes(props:RouteProps):Route{
  const path:string = props.path
  return [{
    path:`${path}`,
    exact:true,
    component:Containers.ListContainer
  },{
    path:`${path}/add`,
    component:Containers.FormContainer
  },{
    path:`${path}/:id/edit`,
    component:Containers.FormContainer
  },{
    path:`${path}/:id`,
    component:Containers.DetailContainer
  }]
}
export default routes
