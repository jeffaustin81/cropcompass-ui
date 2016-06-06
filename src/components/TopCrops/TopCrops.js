import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'


export const TopCrops = () => {

    return (
      <div className="row info-row">
        <div className="col-md-3">
        <h1>TopCrops Component</h1>
        </div>
        <div className="col-md-9">
        <HorizontalBarChart countyName="Douglas" chartTitle="topCrops"/>
        </div>
      </div>
    )
  }

export default TopCrops
