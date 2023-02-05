import { Box, Stack, Image, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Campaign = () => {
	return (
		<>
			<Box bg={'#DBCA33'} id="forms">
				<Stack
					align={"center"}
					spacing={{ base: 8, md: 10 }}
					py={{ base: 10, md: 18 }}
					direction={{ base: "column", md: "row" }}
				>
					<Flex
						flex={1}
						justify={"center"}
						align={"center"}
						position={"relative"}
						w={"full"}
					>
						<Box position={"relative"}>
							<Image
								alt={"Hero Image"}
								fit={"cover"}
								align={"center"}
								w={"100%"}
								h={"100%"}
								src={
									"https://res.cloudinary.com/dltvvelmx/image/upload/v1674452316/AKHARA/campaing_c1dieg.png"
								}
							/>
						</Box>
					</Flex>
					<Stack flex={1} spacing={{ base: 5, md: 20 }}>
						<Heading color={"white"} textAlign={'center'} fontSize={'3rem'}>Social Media <br/>Campaign</Heading>
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

export default Campaign;
