import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

	const elements = [
		{
			title: 'Committees',
			subelem: [
				{
					title: 'Organizing Committee',
					link: '/org_committee'
				},
				{
					title: 'Program Committee',
					link: 'prog_committee'
				}
			]
		},
		{
			title: 'Papers',
			subelem: [
				{
					title: 'Accepted Papers',
					link: '/accepted_papers'
				},
				{
					title: 'Paper Submission',
					link: 'submit_paper'
				}
			]
		},
		{
			title: 'Speakers',
			subelem: [
				{
					title: 'Keynote Speakers',
					link: '/speakers'
				}
			]
		},
		{
			title: 'Registerations',
			subelem: [
				{
					title: 'Register Now',
					link: '/registeration'
				},
				{
					title: 'How to Reach',
					link: '/location'
				}
			]
		},
		{
			title: 'About',
			subelem: [
				{
					title: 'SPACE',
					link: '/about'
				},
				{
					title: 'IIT Roorkee',
					link: '/iitr'
				}
			]
		}
	]

  return (
		<ul className='navbar'>
			{elements.map((menu, index) => {
				return (
					<div className='menu'>
						<li key={index} className='menu cont'>
							<button className='menu'>{menu.title}</button>
						</li>
						<div className='drop-menu'>
							{menu.subelem.map((elem, index) => {
								return (
									<Link to={elem.link} className='drop-elem'>{elem.title}</Link>
								)
							})}
						</div>
					</div>
				)
			})}
		</ul>
  )
}

export default Navbar
