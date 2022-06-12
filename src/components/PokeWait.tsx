import React from 'react'
import WaitingPokeball from '../assets/images/waiting-pokeball.gif'
import PokeWaitWrapper from "../assets/wrappers/PokeWait"

const PokeWait = ({ message }: { message: string }) => {
	return (
		<PokeWaitWrapper className="flex flex-col justify-center">
			<img src={WaitingPokeball} alt="waiting pokeball gif" />
			<h1 className="font-extrabold text-center">{ message }</h1>
		</PokeWaitWrapper>
	)
}

export const MemoizedPokeWait = React.memo(PokeWait)
