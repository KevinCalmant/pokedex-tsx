import DexCardWrapper from '../assets/wrappers/DexCard'
import { Pokemon } from '../models/Pokemon'
import DexCardSkeleton from './DexCardSkeleton'
import { useNavigate } from 'react-router-dom'
import { MemoizedPokeType } from './PokeType'
import Pokeball from '../assets/images/pokeball.svg'
import { Queries } from '../queries/queries'
import { useQuery } from 'react-query'
import { getPokemon } from '../queries/pokemons-queries'

const DexCard = ({url}: { url: string }) => {
	const navigate = useNavigate()

	const {data, isLoading} = useQuery<Pokemon>([Queries.GET_POKEMON, url], {
		queryFn: () => getPokemon(url),
	})

	const handleCardClick = (pokemonId: number) => {
		navigate(`${pokemonId}/detail`)
	}

	return (
		<>
			{data != null && !isLoading ?
				(<DexCardWrapper
					className="rounded-3xl overflow-hidden shadow-lg flex flex-row p-5 duration-100 hover:border-2"
					onClick={() => handleCardClick(data.id)}
				>
					<div className="pokemon-container">
						<img src={Pokeball} className="pokeball" />
						<img
							className="pokemon rounded-full bg-pokemon"
							src={data.sprites.front_default}
							alt="pokemon sprite"
						/>
					</div>
					<div className="flex flex-col justify-start flex-1 space-y-6 pl-5">
						<h1 className="pokemon-name h-5 w-9/12 font-extrabold">
							{data.name}
						</h1>
						<div className="h-11 pt-4 w-full flex flex-row gap-1">
							{
								data.types.map((type, index) =>
									<MemoizedPokeType type={type.type.name} key={`${index + type.type.name + data.name}`} />
								)
							}
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<div className="bg-info rounded-2xl min-w-max text-center">
							<h3 className="pokemon-number font-extrabold p-2"># {data.id}</h3>
						</div>
					</div>
				</DexCardWrapper>)
				: <DexCardSkeleton/>
			}
		</>
	)
}

export default DexCard
