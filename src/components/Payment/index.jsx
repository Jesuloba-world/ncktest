import { Container, Title, SubTitle, Frame } from "./payment.style";
import { Card, PayTypes, Form } from "./sub";

export const Payment = () => {
	return (
		<Container>
			<Frame>
				<Title>Payment Information</Title>
				<SubTitle>Choose your method of payment</SubTitle>
				<Card />
			</Frame>
			<Frame>
				<PayTypes />
				<Form />
			</Frame>
		</Container>
	);
};
