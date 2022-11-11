import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
// import {data} from '../../public/launches.json'

const Launches = (props) => {
  let arr = [{launched: 'abc', location: 'location' , mission: 'mission'}]
  // const rows = [
  //   { id: 1, col1: 'Hello', col2: 'World' },
  //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  //   { id: 3, col1: 'MUI', col2: 'is Amazing' },
  // ];
  const data = [
    {
    "flight_number": 1,
    "mission_name": "FalconSat",
    "mission_id": [],
    "upcoming": false,
    "launch_year": "2006",
    "launch_date_unix": 1143239400,
    "launch_date_utc": "2006-03-24T22:30:00.000Z",
    "launch_date_local": "2006-03-25T10:30:00+12:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
    "rocket_id": "falcon1",
    "rocket_name": "Falcon 1",
    "rocket_type": "Merlin A",
    "first_stage": {
        "cores": [
        {
            "core_serial": "Merlin1A",
            "flight": 1,
            "block": null,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
        }
        ]
    },
    "second_stage": {
        "block": 1,
        "payloads": [
        {
            "payload_id": "FalconSAT-2",
            "norad_id": [],
            "reused": false,
            "customers": [
            "DARPA"
            ],
            "nationality": "United States",
            "manufacturer": "SSTL",
            "payload_type": "Satellite",
            "payload_mass_kg": 20,
            "payload_mass_lbs": 43,
            "orbit": "LEO",
            "orbit_params": {
            "reference_system": "geocentric",
            "regime": "low-earth",
            "longitude": null,
            "semi_major_axis_km": null,
            "eccentricity": null,
            "periapsis_km": 400,
            "apoapsis_km": 500,
            "inclination_deg": 39,
            "period_min": null,
            "lifespan_years": null,
            "epoch": null,
            "mean_motion": null,
            "raan": null,
            "arg_of_pericenter": null,
            "mean_anomaly": null
            }
        }
        ]
    },
    "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
    }
    },
    "ships": [],
    "telemetry": {
    "flight_club": null
    },
    "launch_site": {
    "site_id": "kwajalein_atoll",
    "site_name": "Kwajalein Atoll",
    "site_name_long": "Kwajalein Atoll Omelek Island"
    },
    "launch_success": false,
    "launch_failure_details": {
    "time": 33,
    "altitude": null,
    "reason": "merlin engine failure"
    },
    "links": {
    "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
    "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
    "reddit_campaign": null,
    "reddit_launch": null,
    "reddit_recovery": null,
    "reddit_media": null,
    "presskit": null,
    "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
    "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
    "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
    "youtube_id": "0a_00nJ_Y88",
    "flickr_images": []
    },
    "details": "Engine failure at 33 seconds and loss of vehicle",
    "static_fire_date_utc": "2006-03-17T00:00:00.000Z",
    "static_fire_date_unix": 1142553600,
    "timeline": {
    "webcast_liftoff": 54
    }
},
{
    "flight_number": 2,
    "mission_name": "DemoSat",
    "mission_id": [],
    "launch_year": "2007",
    "launch_date_unix": 1174439400,
    "launch_date_utc": "2007-03-21T01:10:00.000Z",
    "launch_date_local": "2007-03-21T13:10:00+12:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
    "rocket_id": "falcon1",
    "rocket_name": "Falcon 1",
    "rocket_type": "Merlin A",
    "first_stage": {
        "cores": [
        {
            "core_serial": "Merlin2A",
            "flight": 1,
            "block": null,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
        }
        ]
    },
    "second_stage": {
        "block": 1,
        "payloads": [
        {
            "payload_id": "DemoSAT",
            "norad_id": [],
            "reused": false,
            "customers": [
            "DARPA"
            ],
            "nationality": "United States",
            "manufacturer": "SpaceX",
            "payload_type": "Satellite",
            "payload_mass_kg": null,
            "payload_mass_lbs": null,
            "orbit": "LEO",
            "orbit_params": {
            "reference_system": "geocentric",
            "regime": "low-earth",
            "longitude": null,
            "semi_major_axis_km": null,
            "eccentricity": null,
            "periapsis_km": null,
            "apoapsis_km": null,
            "inclination_deg": null,
            "period_min": null,
            "lifespan_years": null,
            "epoch": null,
            "mean_motion": null,
            "raan": null,
            "arg_of_pericenter": null,
            "mean_anomaly": null
            }
        }
        ]
    },
    "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
    }
    },
    "ships": [],
    "telemetry": {
    "flight_club": null
    },
    "launch_site": {
    "site_id": "kwajalein_atoll",
    "site_name": "Kwajalein Atoll",
    "site_name_long": "Kwajalein Atoll Omelek Island"
    },
    "launch_success": false,
    "launch_failure_details": {
    "time": 301,
    "altitude": 289,
    "reason": "harmonic oscillation leading to premature engine shutdown"
    },
    "links": {
    "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
    "mission_patch_small": "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
    "reddit_campaign": null,
    "reddit_launch": null,
    "reddit_recovery": null,
    "reddit_media": null,
    "presskit": null,
    "article_link": "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
    "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
    "video_link": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
    "youtube_id": "Lk4zQ2wP-Nc",
    "flickr_images": []
    },
    "details": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    "upcoming": false,
    "static_fire_date_utc": null,
    "static_fire_date_unix": null,
    "timeline": {
    "webcast_liftoff": 60
    }
},
{
    "flight_number": 3,
    "mission_name": "Trailblazer",
    "mission_id": [],
    "launch_year": "2008",
    "launch_date_unix": 1217648040,
    "launch_date_utc": "2008-08-02T03:34:00.000Z",
    "launch_date_local": "2008-08-02T15:34:00+12:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
    "rocket_id": "falcon1",
    "rocket_name": "Falcon 1",
    "rocket_type": "Merlin C",
    "first_stage": {
        "cores": [
        {
            "core_serial": "Merlin1C",
            "flight": 1,
            "block": null,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
        }
        ]
    },
    "second_stage": {
        "block": 1,
        "payloads": [
        {
            "payload_id": "Trailblazer",
            "norad_id": [],
            "reused": false,
            "customers": [
            "NASA"
            ],
            "nationality": "United States",
            "manufacturer": "Space Dev",
            "payload_type": "Satellite",
            "payload_mass_kg": null,
            "payload_mass_lbs": null,
            "orbit": "LEO",
            "orbit_params": {
            "reference_system": "geocentric",
            "regime": "low-earth",
            "longitude": null,
            "semi_major_axis_km": null,
            "eccentricity": null,
            "periapsis_km": null,
            "apoapsis_km": null,
            "inclination_deg": null,
            "period_min": null,
            "lifespan_years": null,
            "epoch": null,
            "mean_motion": null,
            "raan": null,
            "arg_of_pericenter": null,
            "mean_anomaly": null
            }
        },
        {
            "payload_id": "PRESat",
            "norad_id": [],
            "reused": false,
            "customers": [
            "ORS"
            ],
            "nationality": "United States",
            "manufacturer": null,
            "payload_type": "Satellite",
            "payload_mass_kg": null,
            "payload_mass_lbs": null,
            "orbit": "LEO",
            "orbit_params": {
            "reference_system": "geocentric",
            "regime": "low-earth",
            "longitude": null,
            "semi_major_axis_km": null,
            "eccentricity": null,
            "periapsis_km": null,
            "apoapsis_km": null,
            "inclination_deg": null,
            "period_min": null,
            "lifespan_years": null,
            "epoch": null,
            "mean_motion": null,
            "raan": null,
            "arg_of_pericenter": null,
            "mean_anomaly": null
            }
        }
        ]
    },
    "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
    }
    },
    "ships": [],
    "telemetry": {
    "flight_club": null
    },
    "launch_site": {
    "site_id": "kwajalein_atoll",
    "site_name": "Kwajalein Atoll",
    "site_name_long": "Kwajalein Atoll Omelek Island"
    },
    "launch_success": false,
    "launch_failure_details": {
    "time": 140,
    "altitude": 35,
    "reason": "residual stage-1 thrust led to collision between stage 1 and stage 2"
    },
    "links": {
    "mission_patch": "https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png",
    "mission_patch_small": "https://images2.imgbox.com/3d/86/cnu0pan8_o.png",
    "reddit_campaign": null,
    "reddit_launch": null,
    "reddit_recovery": null,
    "reddit_media": null,
    "presskit": null,
    "article_link": "http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary",
    "wikipedia": "https://en.wikipedia.org/wiki/Trailblazer_(satellite)",
    "video_link": "https://www.youtube.com/watch?v=v0w9p3U8860",
    "youtube_id": "v0w9p3U8860",
    "flickr_images": []
    },
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
    "upcoming": false,
    "static_fire_date_utc": null,
    "static_fire_date_unix": null,
    "timeline": {
    "webcast_liftoff": 14
    }
},
{
    "flight_number": 4,
    "mission_name": "RatSat",
    "mission_id": [],
    "launch_year": "2008",
    "launch_date_unix": 1222643700,
    "launch_date_utc": "2008-09-28T23:15:00.000Z",
    "launch_date_local": "2008-09-28T11:15:00+12:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
    "rocket_id": "falcon1",
    "rocket_name": "Falcon 1",
    "rocket_type": "Merlin C",
    "first_stage": {
        "cores": [
        {
            "core_serial": "Merlin2C",
            "flight": 1,
            "block": null,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
        }
        ]
    },
    "second_stage": {
        "block": 1,
        "payloads": [
        {
            "payload_id": "RatSat",
            "norad_id": [
            33393
            ],
            "reused": false,
            "customers": [
            "SpaceX"
            ],
            "nationality": "United States",
            "manufacturer": "SpaceX",
            "payload_type": "Satellite",
            "payload_mass_kg": 165,
            "payload_mass_lbs": 363,
            "orbit": "LEO",
            "orbit_params": {
            "reference_system": "geocentric",
            "regime": "low-earth",
            "longitude": null,
            "lifespan_years": null,
            "epoch": "2019-02-05T06:47:34.000Z",
            "mean_motion": 14.84700219,
            "raan": 103.1158,
            "semi_major_axis_km": 6992.663,
            "eccentricity": 0.0013082,
            "periapsis_km": 605.381,
            "apoapsis_km": 623.676,
            "inclination_deg": 9.3464,
            "period_min": 96.989,
            "arg_of_pericenter": 188.3837,
            "mean_anomaly": 171.6144
            }
        }
        ]
    },
    "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
    }
    },
    "ships": [],
    "telemetry": {
    "flight_club": null
    },
    "launch_site": {
    "site_id": "kwajalein_atoll",
    "site_name": "Kwajalein Atoll",
    "site_name_long": "Kwajalein Atoll Omelek Island"
    },
    "launch_success": true,
    "links": {
    "mission_patch": "https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png",
    "mission_patch_small": "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png",
    "reddit_campaign": null,
    "reddit_launch": null,
    "reddit_recovery": null,
    "reddit_media": null,
    "presskit": null,
    "article_link": "https://en.wikipedia.org/wiki/Ratsat",
    "wikipedia": "https://en.wikipedia.org/wiki/Ratsat",
    "video_link": "https://www.youtube.com/watch?v=dLQ2tZEH6G0",
    "youtube_id": "dLQ2tZEH6G0",
    "flickr_images": []
    },
    "details": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
    "upcoming": false,
    "static_fire_date_utc": "2008-09-20T00:00:00.000Z",
    "static_fire_date_unix": 1221868800,
    "timeline": {
    "webcast_liftoff": 5
    }
}
]
  const [rows, setRow] = React.useState([])
  React.useEffect(()=>{
    if(data){
      let tempRow = []
      data.map((elem, index)=>{
        console.log(elem);
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
  },[data]) 
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