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

export const Form = ({ register, addCard, setValue }) => {
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

	function sliceIntoChunks(arr, chunkSize = 4) {
		const res = [];
		for (let i = 0; i < arr.length; i += chunkSize) {
			const chunk = arr.slice(i, i + chunkSize);
			res.push(chunk);
		}
		return res;
	}

	const formatInput = (value, name) => {
		const lastChar = value.charAt(value.length - 1);
		let withoutLetters = value;

		if (lastChar.toUpperCase() !== lastChar.toLowerCase()) {
			withoutLetters = value.replace(lastChar, "");
		}

		switch (name) {
			case "creditCardNumber":
				const noSpace = withoutLetters.replaceAll(" ", "");
				let credit = withoutLetters.split("", 19).join("");
				if (noSpace.length <= 16) {
					credit = sliceIntoChunks(noSpace.split(""))
						.map((el) => el.join(""))
						.join(" ");
				}
				setValue(name, credit);
				break;
			case "expirationDate":
				const noSlash = withoutLetters.replaceAll("/", "");
				let date = withoutLetters.split("", 5).join("");
				if (noSlash.length <= 4) {
					date = sliceIntoChunks(noSlash.split(""), 2)
						.map((el) => el.join(""))
						.join("/");
				}
				setValue(name, date);
				break;
			case "securityCode":
				let code = withoutLetters.split("", 3).join("");
				if (withoutLetters.length <= 3) {
					code = withoutLetters;
				}
				setValue(name, code);
				break;
			default:
				setValue(name, withoutLetters);
				break;
		}
	};

	return (
		<Container onSubmit={addCard}>
			{formInputs.map((el, index) => (
				<InputControl key={index}>
					<Label id={el.id}>{el.label}</Label>
					<Input
						id={el.id}
						name={el.name}
						{...register(el.name, {
							onChange: (e) => {
								formatInput(e.target.value, el.name);
							},
						})}
					/>
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
