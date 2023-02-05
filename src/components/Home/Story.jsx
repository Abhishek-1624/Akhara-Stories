import {
	Container,
	Stack,
	Flex,
	Box,
	Text,
	Image,
	Heading,
} from "@chakra-ui/react";
import React from "react";

export default function Story() {
	return (
		<Container pb={20} maxW={"6xl"} id="story">
			<Heading py={10} color={"white"}>
				My Story
			</Heading>
			<Stack
				align={"center"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 5, md: 18 }}
				direction={{ base: "column", md: "row" }}
			>
				<Flex
					flex={1}
					justify={"center"}
					align={"center"}
					position={"relative"}
					w={"full"}
				>
					<Box
						position={"relative"}
						height={"full"}
						width={"full"}
						overflow={"hidden"}
					>
						<Image
							alt={"Hero Image"}
							fit={"cover"}
							align={"center"}
							w={"80%"}
							h={"80%"}
							src={
								"https://res.cloudinary.com/dltvvelmx/image/upload/v1674756447/AKHARA/yash-removebg-preview_fqqery.png"
							}
						/>
					</Box>
				</Flex>
				<Stack flex={2} spacing={{ base: 5, md: 10 }}>
					<Text color={"white"}>
						Akhara Stories was a dream venture founded by two motivated,
						self-driven graduates on the 11th of February 2021, with no
						investment. Even against the gloomy COVID backdrop, they captured
						the market and the business was soon booming. They were able to
						bring in 50 + clients in just the first nine months of starting. But
						as every story has its ups and downs, the partnership dissolved and
						brought with it challenges and problems. Yet ready to take the
						struggles head-on, Mr. Yashwant Rao, decided that he would do
						everything it took to get the business back on its feet. Now he is
						the sole owner of Akhara Stories and has been successful in bringing
						it back to its original glory. The sole aim of this dynamic
						25-year-old entrepreneur is to set Akhara Stories as a brand leader
						in the field of end-to-end marketing solutions and make it grow from
						strength to strength.
					</Text>
				</Stack>
			</Stack>
		</Container>
	);
}
