import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import LaunchContext from '../store/context/launchesContext';
import { client } from '../api/api';
import { FETCH_LAUNCHES } from '../store/actions/actions';
// import {data} from '../../public/launches.json'

const Launches = (props) => {
  let arr = [{launched: 'abc', location: 'location' , mission: 'mission'}]
  // const rows = [
  //   { id: 1, col1: 'Hello', col2: 'World' },
  //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  //   { id: 3, col1: 'MUI', col2: 'is Amazing' },
  // ];
  const {state, dispatch} = React.useContext(LaunchContext)
  console.log(state);
  const [rows, setRow] = React.useState([])
  React.useEffect(()=>{
    fetchAllLaunches()
  },[])
  const fetchAllLaunches = async ()=>{
    const response = await client.get('/launches')
    let launches = response.data
    dispatch({ type: FETCH_LAUNCHES, data: launches})
  }
  React.useEffect(()=>{
    if(state.allLaunches){
      let tempRow = []
      state.allLaunches.map((elem, index)=>{
        let obj = {
          index: index+1,
          id: index+1,
          launched: elem.launch_date_utc,
          location: elem.launch_site?.site_name,
          mission: elem.mission_name,
          orbit: elem.rocket.second_stage.payloads[0].orbit,
          status: elem.upcoming? 'Upcoming' : elem.launch_success? 'Success' : 'Failed',
          rocket: elem.rocket.rocket_name
        }
        tempRow.push(obj)
      })
      setRow(tempRow)
    }
  },[state.allLaunches]) 
  const columns = [
    { field: 'index', headerName: 'No.', headerClassName: 'headerClass' , width: 84},
    { field: 'launched', headerName: 'launched', headerClassName: 'headerClass', width: 250},
    { field: 'location', headerName: 'location', headerClassName: 'headerClass', width: 200 },
    { field: 'mission', headerName: 'mission', headerClassName: 'headerClass', width: 200},
    { field: 'orbit', headerName: 'orbit', headerClassName: 'headerClass' },
    { field: 'status', headerName: 'launch status', headerClassName: 'headerClass' },
    { field: 'rocket', headerName: 'rocket', headerClassName: 'headerClass' },
  ]; 
  return (
  <div style={{ height: 600, width: '100%' }}>
  <DataGrid rows={rows} columns={columns} />

  </div>
  )
}
export default Launches