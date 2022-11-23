import React from 'react'
import {FaUser} from 'react-icons/fa'
import {MdStoreMallDirectory} from 'react-icons/md'
import {HiUserGroup} from 'react-icons/hi'

const Features = () => {
  return (
    <div id='About'>
 <section className="m-4 md:m-8   mt-24 mb-24">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center mt-24 mb-24">
		<h2 className="text-5xl font-bold">Centralize all your music-related activity in one place.</h2>
		<p className="">You can choose between being an artist, a band or an establishment, so you can access the benefits of each one.</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-24 mb-24">
		<div className="flex flex-col items-center p-4">
    <i className="text-5xl text-bandme_dark"><FaUser/></i>
			<h3 className="my-3 text-3xl font-semibold">Musician</h3>
			<div className="space-y-1 leading-tight">
				<p>Share your music content and find places to play</p>
				<p>Connect with other musicians</p>
				<p>Look for bands that are looking for musicians</p>
				<p>Publish events in which you are going to participate</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
    <i className="text-5xl text-bandme_dark"><HiUserGroup/></i>
			<h3 className="my-3 text-3xl font-semibold">Band / Group</h3>
			<div className="space-y-1 leading-tight">
				<p>Share your band's music content</p>
				<p>Look for establishments looking for bands</p>
				<p>Set member searches for your band</p>
				<p>Publish events in which you are going to participate</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
    <i className="text-5xl text-bandme_dark"><MdStoreMallDirectory/></i>
			<h3 className="my-3 text-3xl font-semibold">Stablishment</h3>
			<div className="space-y-1 leading-tight">
				<p>Search for musicians or bands to play at your establishment</p>
				<p>Publish events that you carry out and seek to promote</p>
			</div>
		</div>


	
	</div>

</section>
    </div>
  )
}

export default Features