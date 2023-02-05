import { Container, Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const About = (props) => {
	return (
		<>
			<Container maxW={"6xl"} id={'about'}>
				<Box>
					<Heading py={10} color={"white"}>
						About Us
					</Heading>
					<Text color={"white"}>
						We are a driven fraternity of enthusiastic individuals that came
						into being for one reason, growth. We have worked and continue to
						work with major brands towards their, in turn, our growth. We are
						flexible, focused, and most of all fun. We at Akhara have faced our
						fair share of hiccups along the way. A lot of hardships and a lot of
						lost pieces in the puzzle. However, this is a reimagined Akhara
						Stories. More functional than ever, more focused than ever. We will
						help your brand reach new heights. Join us on this journey to the
						top of the world!
					</Text>
				</Box>
			</Container>
			<Box
				position={"relative"}
				left={-5}
				width={{ base: "5rem", md: "7rem" }}
				height={{ base: "7rem", md: "7rem" }}
				overflow={"hidden"}
			>
				<Image
					alt={"Hero Image"}
					fit={"cover"}
					align={"center"}
					w={"70%"}
					h={"70%"}
					src={
						"https://res.cloudinary.com/rivach/image/upload/v1670569025/samples/Polygon_2_ia142u.png"
					}
				/>
			</Box>
		</>
	);
};

export default About;
