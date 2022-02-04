import { Box, Wrapper } from "./style";

export const Container = ({ children }) => {
	return (
		<Wrapper>
			<Box>{children}</Box>
		</Wrapper>
	);
};
