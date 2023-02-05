import React from "react";
import { Box, IconButton, useBreakpointValue, Image } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
	dots: false,
	arrows: false,
	fade: false,
	infinite: false,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export default function Carousel2() {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = React.useState(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: "90%", md: "50%" });
	const side = useBreakpointValue({ base: "30%", md: "10px" });

	// These are the images used in the slide
	const cards = [
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1675587224/Website/Social%20Media/Untitled-1_y3spq8.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1675587224/Website/Social%20Media/Untitled-2_fppkxn.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1675587224/Website/Social%20Media/Untitled-3_ifcnqj.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1675587225/Website/Social%20Media/Untitled-4_cuiefa.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1675587225/Website/Social%20Media/Untitled-5_e4nect.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1675587225/Website/Social%20Media/Untitled-6_s4fsol.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1675587225/Website/Social%20Media/Untitled-7_rfqzlj.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1675587225/Website/Social%20Media/Untitled-8_iyeyfr.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1675587227/Website/Social%20Media/Untitled-9_ydwaae.png",
	];

	return (
		<Box
			position={"relative"}
			height={{ base: "400px", md: "600px", lg: "900px" }}
			width={"full"}
			overflow={"hidden"}
		>
			{/* CSS files for react-slick */}
			<link
				rel="stylesheet"
				type="text/css"
				charSet="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			{/* Left Icon */}
			<IconButton
				aria-label="left-arrow"
				size={"lg"}
				colorScheme="white"
				borderRadius="full"
				position="absolute"
				left={side}
				top={top}
				transform={"translate(0%, -50%)"}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
			>
				{/* <BiLeftArrowAlt /> */}
				<FaChevronLeft />
			</IconButton>
			{/* Right Icon */}
			<IconButton
				aria-label="right-arrow"
				size={"lg"}
				colorScheme="white"
				borderRadius="full"
				position="absolute"
				right={side}
				top={top}
				transform={"translate(0%, -50%)"}
				zIndex={2}
				onClick={() => slider?.slickNext()}
			>
				<FaChevronRight />
			</IconButton>
			{/* Slider */}
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{cards.map((url, index) => (
					<Box py={5} key={index} position="relative">
						<Image height={{ base: "300px", md: "500px", lg: "800px" }} src={url} />
					</Box>
				))}
			</Slider>
		</Box>
	);
}
