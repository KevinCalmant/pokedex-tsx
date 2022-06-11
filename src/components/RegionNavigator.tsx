import React, { useContext, useEffect } from 'react'
import RegionNavigatorWrapper from '../assets/wrappers/RegionNavigator'
import { Region, regionData } from '../models/RegionInfo'
import RegionContext from "../contexts/RegionContext";

export interface RegionNavigatorProps {
  currentRegion: Region
}

const RegionNavigator = () => {
  const {region, setRegion} = useContext(RegionContext);

  const handleRegionClick = (region: Region) => {
    setRegion(region);
  }

  return (
      <RegionNavigatorWrapper className="flex flex-row justify-center">
          <nav className="w-6/12 rounded-2xl flex flex-col justify-center font-medium">
            <ul className="flex flex-row justify-around p-4 font-extrabold">
              {
                Object.entries(regionData).map(([regionName, info]) =>
                    <li className={`mb-0.5 hover:border-b-2 cursor-pointer ${region === regionName as Region ? 'border-b-2' : ''}`}
                        key={regionName}
                        onClick={() => handleRegionClick(regionName as Region)}>{regionName}</li>
                )
              }
            </ul>
          </nav>
      </RegionNavigatorWrapper>
  )
}

export default RegionNavigator
