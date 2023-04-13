import Background from '../assets/images/cars.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
        <div className="flex place-items-center h-screen">
            <h2 className="p-5 bg-white text-black rounded">Navigate to Start Searching for Your Dream Car</h2>
        </div>
      
    </div>
  )
}

export default Home
