import {
	Container,
	Title,
	CardNumber,
	Expiration,
	OwnerName,
	Micro,
	PlaceHolder,
	Chip,
} from "./card.style";
import { ReactComponent as Wifi } from "../../../assets/svg/wifi.svg";
import { ReactComponent as MasterCard } from "../../../assets/svg/mastercard.svg";
import chipImage from "../../../assets/chip.png";

export const Card = ({ getValue }) => {
	const creditCardNumber = getValue("creditCardNumber");
	const expirationDate = getValue("expirationDate");

	return (
		<Container>
			<Title>CARD NUMBER</Title>
			{creditCardNumber ? (
				<CardNumber>{creditCardNumber}</CardNumber>
			) : (
				<PlaceHolder />
			)}
			<Micro>
				<Wifi className="wifi" />
				<Chip src={chipImage} />
			</Micro>
			<Title>EXPIRATION DATE</Title>
			{expirationDate ? (
				<Expiration>{expirationDate}</Expiration>
			) : (
				<PlaceHolder />
			)}
			<OwnerName>John Doe</OwnerName>
			<MasterCard className="mastercard" />
		</Container>
	);
};
