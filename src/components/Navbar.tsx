import { Link } from 'react-router-dom'
import Button from './Button'
import { useState } from 'react'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload(); 
     }
    
    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if (response.user){
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <Link to ='/' className="font-semibold text-2x1 tracking-widest">Cars</Link>
            </div>
            <div className="block">
                <button 
                    onClick={dropDown}
                    className="flex items-center px-5 py-3 text-black
                    border rounded border-gray-500 hover:text-gray-400 hover:border-gray-400">         
                        <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            { isVisible? (
            <div className="block w-full flex-grow items-center">
                <div className="text-sm lg:flex-grow">
                    <Button className="p-3 m-5 bg-white justify-center">
                        <div>
                            <Link to='/' onClick= { clicked } className='flex place-items-center mt-4 lg:inline-black lg:mt-0
                            text-black hover:text-gray-500 mr-4'>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-white justify-center">
                        <div>
                            <Link to='/about' onClick= { clicked } className='flex place-items-center mt-4 lg:inline-black lg:mt-0
                            text-black hover:text-gray-500 mr-4'>
                                About
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-white justify-center">
                        <div>
                            <Link to='/dashboard' onClick= { clicked } className='flex place-items-center mt-4 lg:inline-black lg:mt-0
                            text-black hover:text-gray-500 mr-4'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-white justify-center">
                        <div>
                            <Link to='/car_inventory' onClick= { clicked } className='flex place-items-center mt-4 lg:inline-black lg:mt-0
                            text-black hover:text-gray-500 mr-4'>
                                Car Inventory
                            </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ? 

                        <Button className="p-3 m-5 bg-white justify-center">
                            <div>
                                <Link to="/" onClick={ () => {signInOnClick()}} className="flex place-items-center mt-4
                                 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                                    Login
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className="p-3 m-5 bg-white justify-center">
                        <div>
                            <Link to="/" onClick={ () => {signOutOnClick()}} className="flex place-items-center mt-4
                             lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                                Sign Out
                            </Link>
                        </div>
                    </Button>
                    }
                </div>
            </div>
            ):(
                <></>
                ) }
        </nav>
  )
};

export default Navbar

