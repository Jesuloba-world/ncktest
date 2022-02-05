import { Container, Part, Summary, Prize } from "./price.style";
import numeral from "numeral";

export const Price = () => {
	return (
		<Container>
			<Part>
				<Summary>Subtotal</Summary>
				<Prize>&#8358;{numeral(2497).format("0,0.00")}</Prize>
			</Part>
			<Part>
				<Summary>Estimated TAX</Summary>
				<Prize>&#8358;{numeral(119.64).format("0,0.00")}</Prize>
			</Part>
			<Part>
				<Summary>
					Promotional Code: <span>Z4KXLM9A</span>
				</Summary>
				<Prize>&#8358;{numeral(-60.0).format("0,0.00")}</Prize>
			</Part>
		</Container>
	);
};
