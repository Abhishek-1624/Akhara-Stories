import React from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
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

export default function Gallery() {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = React.useState(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: "90%", md: "50%" });
	const side = useBreakpointValue({ base: "30%", md: "10px" });

	// These are the images used in the slide
	const cards = [
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1674749848/Website/PHOTO%20PNG/Untitled-1_qp7tez.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1674749842/Website/PHOTO%20PNG/Untitled-2_ovfimi.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1674749842/Website/PHOTO%20PNG/Untitled-3_wgqkco.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1674749843/Website/PHOTO%20PNG/Untitled-9_zhj0ht.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1674749849/Website/PHOTO%20PNG/Untitled-8_arczyv.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1674749845/Website/PHOTO%20PNG/Untitled-11_zorhot.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1674749843/Website/PHOTO%20PNG/Untitled-5_wgeqcm.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1674749848/Website/PHOTO%20PNG/Untitled-12_cepjdk.png",
		"https://res.cloudinary.com/dwpw3lcm8/image/upload/v1674749845/Website/PHOTO%20PNG/Untitled-6_jv9bg8.png",
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
						<Image src={url} />
					</Box>
				))}
			</Slider>
		</Box>
	);
}
