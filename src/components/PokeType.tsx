import './PokeType.css'

import {memo} from 'react'

const PokeType = ({type}: { type: string }) => {
	return (
		<div className={`rounded-2xl type-container type-${type}`}>
			{type}
		</div>
	)
}

export const MemoizedPokeType = memo(PokeType)
