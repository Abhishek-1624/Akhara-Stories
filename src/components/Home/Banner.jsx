import React from "react";
import {
	Button,
	Flex,
	Heading,
	Image,
	Box,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
	return (
		<Stack minH={"40vh"} marginBottom={0} paddingBottom={0} direction={{ base: "column", md: "row" }}>
			<Flex px={8} pt={8} pb={0} flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<Heading fontFamily={'Roboto Slab'} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
						<Text as={"span"} position={"relative"} color={"white"}>
							Work with the
						</Text>
						<br />{" "}
						<Text color={"rgba(219, 202, 51, 1)"} fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }} as={"span"}>
							Best Marketers
						</Text>
						<br />{" "}
						<Text as={"span"} position={"relative"} color={"white"}>
							for your Business
						</Text>
					</Heading>
					<Text fontSize={{ base: "md", lg: "lg" }} fontFamily={'Roboto Slab'} color={"white"}>
						We are Akhara. The home of creativity. We are your one-stop shop for
						all your branding and advertising needs. Contact us today for
						tailor-made content strategies and top-notch marketing that is
						authentic and effective.
					</Text>
				</Stack>
			</Flex>
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
					width={{ base: "17rem", md: "17rem" }}
					height={{ base: "17rem", md: "16rem" }}
					overflow={"hidden"}
				>
					<Image
						alt={"Hero Image"}
						fit={"cover"}
						align={"center"}
						w={"100%"}
						h={"100%"}
						src={
							"https://res.cloudinary.com/dltvvelmx/image/upload/v1674750218/AKHARA/Variant2_ckxsls.png"
						}
					/>
				</Box>
			</Flex>
		</Stack>
	);
}
