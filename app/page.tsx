import HomeView from '@/components/HomePage/HomeView'
import PokemonList from '@/components/PokemonList/PokemonList'

export default function Home() {
  return (
    <div className='bg-neutral-900'>
      <HomeView/>
      <PokemonList/>
    </div>
      
    
  )
}
