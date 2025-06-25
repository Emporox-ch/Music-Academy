import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            {['Home', 'About', 'Courses', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            {['Facebook', 'Twitter', 'Instagram'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Purnachandi, Lalitpur</p>
          <p>Lalitpur 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 202 Music Academy. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
