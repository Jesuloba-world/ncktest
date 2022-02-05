import {
	Container,
	InputControl,
	Input,
	Label,
	FormControl,
	LabelText,
	ReuseCard,
	AddCard,
} from "./form.style";

export const Form = () => {
	const formInputs = [
		{
			id: "cardNumber",
			label: "Credit card number",
			name: "creditCardNumber",
		},
		{
			id: "date",
			label: "Expiration date",
			name: "expirationDate",
		},
		{
			id: "code",
			label: "Security code",
			name: "securityCode",
		},
		{
			id: "postal",
			label: "Postal Code",
			name: "postalCode",
		},
	];

	return (
		<Container>
			{formInputs.map((el, index) => (
				<InputControl key={index}>
					<Label id={el.id}>{el.label}</Label>
					<Input id={el.id} name={el.name} />
				</InputControl>
			))}
			<FormControl>
				<ReuseCard>
					<input type="checkbox" id="reUse" />
					<Label htmlFor="reUse">
						<LabelText>
							Use this card for next time purchase
						</LabelText>
					</Label>
				</ReuseCard>
				<AddCard>Add card</AddCard>
			</FormControl>
		</Container>
	);
};
