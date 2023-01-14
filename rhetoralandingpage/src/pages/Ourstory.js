import { React } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import OurStoryFormContainer from '../components/OurstoryFormContainer';
import InfoBG from '../assets/ourstory-info-bg.svg';
import LukaLine from '../assets/luka-line.svg';
import LukaLineMobile from '../assets/luka-line-mobile.svg';
import MazenLineMobile from '../assets/mazen-line-mobile.svg';
import MazenLine from '../assets/mazen-line.svg';
import MobileTimeLineBG from '../assets/mobile-timeline.svg';

import TimeLineLeftBG from '../assets/timeline-left-bg.svg';
import TimeLineRightBG from '../assets/timeline-right-bg.svg';
import '../styles/Ourstory.css';

const Ourstory = () => {
	return (
		<div>
			<Navbar />
			<div className="flex mt-[40px]">
				<div
					className="md:w-2/5 bg-contain bg-no-repeat hidden md:block"
					style={{
						backgroundImage: `url(${InfoBG})`,
					}}
				></div>
				<div className="md:w-3/5">
					<div>
						<img className="hidden md:block" src={LukaLine} alt="" srcset="" />
						<img
							className="block md:hidden w-full h-[100px] mb-[20px]"
							src={LukaLineMobile}
							alt=""
							srcset=""
						/>
					</div>
					<div className="mt-[40px] px-10 md:w-1/2 mx-auto text-center">
						<p className="font-semibold">2019</p>
						<p className="mt-[18px] text-base">
							Luka and Mazen have been business partners for many years, having
							met in high school and bonded over our shared mentality and
							entrepreneurial spirit. We have always been driven to find ways to
							improve upon existing ideas and create new solutions to problems.
						</p>
					</div>
					<div className="mt-[40px]">
						<img className="hidden md:block" src={MazenLine} alt="" srcset="" />
						<img
							className="block md:hidden w-full h-[100px] mb-[20px]"
							src={MazenLineMobile}
							alt=""
							srcset=""
						/>
					</div>
				</div>
			</div>

			<div className="md:flex mt-[40px] hidden">
				<div className="w-1/2 relative">
					<img src={TimeLineLeftBG} alt="" srcset="" />
					<div className="md:w-3/5 md:ml-auto md:text-center absolute xl:top-[50%] md:top-[40%] left-[20%]">
						<p className="font-semibold">2022</p>
						<p className="mt-[16px] text-base">
							During the growth of our e-commerce business and working in sales,
							we experienced the challenges of cold calling and decided to
							create Rhetora, an AI-powered platform that helps salespeople
							improve their cold calling skills and increase their chances of
							success in a stress-free environment.
						</p>
					</div>
				</div>
				<div className="w-1/2 relative md:mt-[60px]">
					<div className="md:w-3/5 md:ml-auto md:text-center mx-auto">
						<p className="font-semibold">2020 & 2021</p>
						<p className="mt-[16px] text-base">
							Luka and I started our journey as e-commerce partners, building
							and growing our online business. This allowed us to gain valuable
							experience and insights into the world of entrepreneurship and
							e-commerce.
						</p>
					</div>
					<div className="flex w-full justify-end md:mt-[-100px]">
						<img src={TimeLineRightBG} alt="" srcset="" />
					</div>

					<div className="md:w-3/5 md:ml-auto md:text-center mx-auto mt-[100px]">
						<p className="font-semibold">2023</p>
						<p className="mt-[16px] text-base">
							Rhetora is revolutionizing the sales industry by helping
							salespeople master cold calling using AI. With Rhetora,
							salespeople can improve their skills and increase their chances of
							success. Rhetora empowers salespeople to turn cold calling into a
							powerful tool for building relationships and closing deals.
						</p>
					</div>
				</div>
			</div>

			<div className="md:hidden pr-[20px] mt-[40px] block w-full relative">
				<img className="w-full" src={MobileTimeLineBG} alt="" srcset="" />
				<div className="absolute top-[10%] ml-[60px] w-3/5 timeline-2021">
					<p className="font-semibold">2020 & 2021</p>
					<p className="mt-[16px] text-base">
						Luka and I started our journey as e-commerce partners, building and
						growing our online business. This allowed us to gain valuable
						experience and insights into the world of entrepreneurship and
						e-commerce.
					</p>
				</div>
				<div className="absolute top-[60%] w-3/5 ml-[60px] timeline-2022">
					<p className="font-semibold">2022</p>
					<p className="mt-[16px] text-base">
						During the growth of our e-commerce business and working in sales,
						we experienced the challenges of cold calling and decided to create
						Rhetora, an AI-powered platform that helps salespeople improve their
						cold calling skills and increase their chances of success in a
						stress-free environment.
					</p>
				</div>
				<div className="absolute top-[90%] w-3/5 ml-[60px] mb-[40px] timeline-2023">
					<p className="font-semibold">2023</p>
					<p className="mt-[16px] text-base">
						Rhetora is revolutionizing the sales industry by helping salespeople
						master cold calling using AI. With Rhetora, salespeople can improve
						their skills and increase their chances of success. Rhetora empowers
						salespeople to turn cold calling into a powerful tool for building
						relationships and closing deals.
					</p>
				</div>
			</div>

			<div className="relative mt-[200px] md:mt-[600px]">
				<OurStoryFormContainer id="com2" title="Get in Touch With Us" />
				<Footer />
			</div>
		</div>
	);
};

export default Ourstory;
