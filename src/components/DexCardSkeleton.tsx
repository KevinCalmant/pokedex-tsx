import React from 'react'
import DexCardWrapper from '../assets/wrappers/DexCard'

const DexCardSkeleton = () => {
	return (
		<DexCardWrapper
			className="animate-pulse rounded-3xl overflow-hidden shadow-lg flex flex-row p-5 opacity-25">
			<div className="pokemon-container">
				<div
					className="pokemon bg-info pokeball rounded-full bg-pokemon"
				/>
			</div>
			<div className="flex flex-col justify-start flex-1 space-y-6 pl-5">
				<div className="h-5 w-9/12 bg-info rounded"></div>
				<div className="h-8 w-9/12 bg-info rounded"></div>
			</div>
			<div className="flex flex-col justify-center">
				<div className="bg-info rounded-2xl min-w-max text-center">
					<h3 className="pokemon-number font-extrabold p-2"></h3>
				</div>
			</div>
		</DexCardWrapper>
	)
}

export default DexCardSkeleton
