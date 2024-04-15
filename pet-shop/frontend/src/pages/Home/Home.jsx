import './Home.css'
import Hero from '../../components/Hero/Hero'
import Video0fPet from '../../components/Video0fPet/Video0fPet'
import PreventiveCare from '../../components/PreventiveCare/PreventiveCare'
import BuyAnimals from '../../components/BuyAnimals/BuyAnimals'
import VetcareTeam from '../../components/VetcareTeam/VetcareTeam'
import ServicesPerformed from '../../components/ServicesPerformed/ServicesPerformed'
import RecentPosts from '../../components/RecentPosts/RecentPosts'

const Home = () => {
  return (
    <>
      <Hero />
      <Video0fPet />
      <PreventiveCare />
      <BuyAnimals />
      <VetcareTeam />
      <ServicesPerformed />
      <RecentPosts />
    </>
  )
}

export default Home