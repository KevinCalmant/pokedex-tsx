import { useContext } from 'react'
import { MemoizedPokeWait } from '../components/PokeWait'
import RegionContext from '../contexts/RegionContext'
import { Region, regionData } from '../models/RegionInfo'

const PokeDetail = () => {
  const {region} = useContext(RegionContext)

  return (
      <div>
        <MemoizedPokeWait message={`Prof. ${regionData[region as Region].profName} is searching for your pokemon!`}/>
      </div>
  )
}

export default PokeDetail
