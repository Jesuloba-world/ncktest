import {
	ChoosePaypal,
	PayPal,
	PaymentTypes,
	VisaAndDiscover,
} from "../payment.style";
import { ReactComponent as Visa } from "../../../assets/svg/visa.svg";
import { ReactComponent as Discover } from "../../../assets/svg/discover.svg";
import { ReactComponent as Paypal } from "../../../assets/svg/paypal.svg";

export const PayTypes = () => {
	return (
		<PaymentTypes>
			<VisaAndDiscover>
				<Visa className="visa" />
				<Discover className="discover" />
			</VisaAndDiscover>
			<PayPal>
				<ChoosePaypal type="radio" id="paypal" />
				<label htmlFor="paypal">
					<Paypal />
				</label>
			</PayPal>
		</PaymentTypes>
	);
};
