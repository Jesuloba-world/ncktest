import { Container, Title, SubTitle, Frame } from "./payment.style";
import { Card, PayTypes, Form } from "./sub";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	creditCardNumber: yup.string().max(19).min(16).required(),
	expirationDate: yup.string().max(5).min(5).required(),
	securityCode: yup.string().max(3).min(3).required(),
	postalCode: yup.string().max(10).min(4).required(),
});

export const Payment = () => {
	const { handleSubmit, watch, register, setValue } = useForm({
		resolver: yupResolver(schema),
	});

	const addCard = (data) => {
		console.log(data);
	};

	return (
		<Container>
			<Frame>
				<Title>Payment Information</Title>
				<SubTitle>Choose your method of payment</SubTitle>
				<Card watch={watch} />
			</Frame>
			<Frame>
				<PayTypes />
				<Form
					register={register}
					addCard={handleSubmit(addCard)}
					setValue={setValue}
				/>
			</Frame>
		</Container>
	);
};
