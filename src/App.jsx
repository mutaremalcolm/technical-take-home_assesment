import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import NewIdeaModal from './components/NewIdeaModal';


const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
      </div>
      <div className='flex flex-col items-center mt-5'>
        <NewIdeaModal />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
