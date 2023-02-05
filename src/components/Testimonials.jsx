import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Services = () => {
	return (
		<>
			<Box id="client">
				<Image
					alt={"Hero Image"}
					fit={"cover"}
					align={"center"}
					w={"100%"}
					h={"100%"}
					src={
						"https://res.cloudinary.com/dltvvelmx/image/upload/v1674451124/AKHARA/Slide_4_Clients_bpycqn.png"
					}
				/>
			</Box>
		</>
	);
};

export default Services;
