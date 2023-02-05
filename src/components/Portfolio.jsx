import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Services = () => {
	return (
		<>
			<Box id="portfolio">
				<Image
					alt={"Hero Image"}
					fit={"cover"}
					align={"center"}
					w={"100%"}
					h={"100%"}
					src={
						"https://res.cloudinary.com/dltvvelmx/image/upload/v1674451123/AKHARA/Slide_5_Protfolio_Text_tyyccb.png"
					}
				/>
			</Box>
		</>
	);
};

export default Services;
