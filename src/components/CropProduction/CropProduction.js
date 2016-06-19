import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import LineChartD3 from 'components/VisualizationsD3/LineChartD3/LineChartD3'
import Words from '../Words/Words'


export const CropProduction = (props) => {
    return (
      <div className="row text-center info-row">
        <div className="row">
        <CuteButton>
        <h1>{props.selectedCounty} crop production</h1>
        </CuteButton>
        </div>
        <br/>
        <div className="row">
            <div className="col-md-6">
              <LineChartD3 selectedCounty={props.selectedCounty} xMetric="year" yMetric="harvested_acres" dataset={props.dataset} title={`${props.selectedCrop} production in ${props.selectedCounty} by year`} selectedCrop={props.selectedCrop} countyData={props.countyData}/>
            </div>
            <div className="col-md-6">
              <Words title="Crop Production and Environment">
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
              </Words>
            </div>
        </div>
      </div>
    )
  }

  export default CropProduction
