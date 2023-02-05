import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Services = () => {
	return (
		<>
			<Box id="service">
				<Image
					alt={"Hero Image"}
					fit={"cover"}
					align={"center"}
					w={"100%"}
					h={"100%"}
					src={
						"https://res.cloudinary.com/dltvvelmx/image/upload/v1674451123/AKHARA/Slide_3_Services_ogkcni.png"
					}
				/>
			</Box>
		</>
	);
};

export default Services;
