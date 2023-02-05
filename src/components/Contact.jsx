import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	IconButton,
	Button,
	VStack,
	HStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
} from "@chakra-ui/react";
import {
	MdPhone,
	MdEmail,
	MdLocationOn,
	MdFacebook,
	MdOutlineEmail,
	MdOutlinePhone,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson, BsYoutube, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_x055nzu",
				"template_0fy9n1y",
				form.current,
				"wvbC9bx62Z_fAZ7bU"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent");
					alert("message has been sent");
					window.location.reload();
				},
				(error) => {
					console.log(error.text);
					alert("Check the input fields");
				}
			);
	};
	return (
		<Container maxW="full" mt={0} centerContent overflow="hidden" id="contact">
			<Heading fontSize={"3rem"} color={"white"} py={10} textAlign={"center"}>
				Contact Us
			</Heading>
			<Flex>
				<Box
					bg="#1E1E1E"
					color="white"
					borderRadius="lg"
					m={{ sm: 4, md: 16, lg: 10 }}
					px={{ sm: 5, md: 5, lg: 16 }}
					pb={{ sm: 5, md: 5, lg: 16 }}
				>
					<Box p={4}>
						<Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
							<WrapItem>
								<Box>
									{/* <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text> */}
									<Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
										<VStack pl={0} spacing={3} alignItems="flex-start">
											<Button
												size="md"
												height="70px"
												width="200px"
												variant="ghost"
												color="#DCE2FF"
												_hover={{ border: "2px solid #1C6FEB" }}
												leftIcon={<MdLocationOn color="#DBCA33" size="20px" />}
											>
											6-3-252/2, Workafella, Irram Manzil Colony, Banjara Hills, Hyderabad, Telangana 500082
											</Button>
											<Button
												size="md"
												height="48px"
												width="200px"
												variant="ghost"
												color="#DCE2FF"
												_hover={{ border: "2px solid #1C6FEB" }}
												leftIcon={<MdEmail color="#DBCA33" size="20px" />}
											>
												info@akharastories.com
											</Button>
											<Button
												size="md"
												height="48px"
												width="200px"
												variant="ghost"
												color="#DCE2FF"
												_hover={{ border: "2px solid #1C6FEB" }}
												leftIcon={<MdPhone color="#DBCA33" size="20px" />}
											>
												+91 99493 99933
											</Button>
											<HStack p={5} padding="0px">
												<a href={'https://www.facebook.com'}>
													<BsFacebook color="#DBCA33" size="30px" />
												</a>
												<a href={'https://www.instagram.com'}>
													<BsInstagram color="#DBCA33" size="30px" />
												</a>
												<a href={'https://www.youtube.com'}>
													<BsYoutube color="#DBCA33" size="30px" />
												</a>
											</HStack>
										</VStack>
									</Box>
								</Box>
							</WrapItem>
							<WrapItem>
								<Box bg="#1E1E1E" borderRadius="lg">
									<Box m={8} color="white">
										<VStack spacing={5}>
											<form ref={form} onSubmit={sendEmail}>
												<FormControl id="name">
													<FormLabel>Full Name</FormLabel>
													<InputGroup borderColor="#E0E1E7">
														<InputLeftElement
															pointerEvents="none"
															children={<BsPerson color="gray.800" />}
														/>
														<Input name="from_name" type="text" size="md" />
													</InputGroup>
												</FormControl>
												<FormControl id="name">
													<FormLabel>Email Id</FormLabel>
													<InputGroup borderColor="#E0E1E7">
														<InputLeftElement
															pointerEvents="none"
															children={<MdOutlineEmail color="gray.800" />}
														/>
														<Input name="mail" type="text" size="md" />
													</InputGroup>
												</FormControl>
												<FormControl id="name">
													<FormLabel>Phone Number</FormLabel>
													<InputGroup borderColor="#E0E1E7">
														<InputLeftElement
															pointerEvents="none"
															children={<MdOutlinePhone color="gray.800" />}
														/>
														<Input name="phone" type="number" size="md" />
													</InputGroup>
												</FormControl>
												<FormControl id="name">
													<Textarea
														my={5}
														borderColor="gray.300"
														name="message"
														_hover={{
															borderRadius: "gray.300",
														}}
														bg={"#D9D9D9"}
														placeholder="message"
													/>
												</FormControl>
												<FormControl id="name" float="right">
													<Button
														borderRadius={"50px"}
														variant="solid"
														bg="#DBCA33"
														color="white"
														_hover={{}}
														type="submit"
													>
														Send Message
													</Button>
												</FormControl>
											</form>
										</VStack>
									</Box>
								</Box>
							</WrapItem>
						</Wrap>
					</Box>
				</Box>
			</Flex>
		</Container>
	);
}
