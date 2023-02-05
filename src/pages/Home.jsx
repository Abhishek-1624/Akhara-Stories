import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import Banner from "./../components/Home/Banner";
import About from "../components/Home/About";
import Story from "../components/Home/Story";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Portfolio from "./../components/Portfolio";
import Photography from "../components/Photography";
import Gallery from "../components/Gallery";
import Campaign from "../components/Campaign";
import Carousel2 from './../components/Carousel2';
import Contact from "../components/Contact";

const Home = () => {
	return (
		<>
			<Box bg={"#1E1E1E"}>
				<Box
					position={"relative"}
					left={-5}
					width={{ base: "2rem", md: "4rem" }}
					height={{ base: "2rem", md: "4rem" }}
					overflow={"hidden"}
				>
					<Image
						alt={"Hero Image"}
						fit={"cover"}
						align={"center"}
						w={"100%"}
						h={"100%"}
						src={
							"https://res.cloudinary.com/rivach/image/upload/v1670570493/samples/Polygon_1_gn3uop.png"
						}
					/>
				</Box>
				<Banner />
				<Flex
					flex={1}
					justify={"center"}
					align={"center"}
					position={"relative"}
					w={"full"}
				>
					<Box
						position={"relative"}
						rounded={"2xl"}
						width={{ base: "10rem", md: "13rem" }}
						height={{ base: "10rem", md: "14rem" }}
						overflow={"hidden"}
					>
						<Image
							alt={"Hero Image"}
							fit={"cover"}
							align={"center"}
							w={"100%"}
							h={"100%"}
							src={
								"https://res.cloudinary.com/rivach/image/upload/v1670569025/samples/Polygon_2_ia142u.png"
							}
						/>
					</Box>
				</Flex>
				<About />
				<Story />
				<Services />
				<Testimonials />
				<Portfolio />
				<Photography />
				<Gallery />
				<Campaign />
				
				<Carousel2 />

				<Contact />
			</Box>
		</>
	);
};

export default Home;
