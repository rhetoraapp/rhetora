import { React, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import InfoBG from '../assets/ourstory-info-bg.svg';
import LukaLine from '../assets/luka-line.svg';
import MazenLine from '../assets/mazen-line.svg';
import ReactGA from 'react-ga';

const Ourstory = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname);
	}, []);

	return (
		<div>
			<Navbar />

			<div className="flex mt-[40px]">
				<div
					className="w-2/5"
					style={{
						backgroundImage: `url(${InfoBG})`,
						backgroundSize: 'cover',
					}}
				></div>
				<div className="w-3/5">
					<div>
						<img src={LukaLine} alt="" srcset="" />
					</div>
					<div className="mt-[40px] w-1/2 mx-auto text-center">
						<p className="font-semibold">2019</p>
						<p className="mt-[16px] text-base">
							Luka and Mazen have been business partners for many years, having
							met in high school and bonded over our shared mentality and
							entrepreneurial spirit. We have always been driven to find ways to
							improve upon existing ideas and create new solutions to problems.
						</p>
					</div>
					<div className="mt-[40px]">
						<img src={MazenLine} alt="" srcset="" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Ourstory;
