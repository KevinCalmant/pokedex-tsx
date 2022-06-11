import { createContext, ReactComponentElement, useState } from 'react'
import { Region, RegionInfo } from '../models/RegionInfo'

const RegionContext = createContext({
	region: 'kanto',
	setRegion: (region: Region) => {}
})

export default RegionContext
