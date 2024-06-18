import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='p-8'>
        <h1 className='font-bold'>NotFound</h1>
        <p>Page Not Found return to <NavLink to="/" className="font-bold hover:underline text-blue">Homepage</NavLink></p>
    </div>
  )
}
