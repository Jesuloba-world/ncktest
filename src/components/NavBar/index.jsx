import { Container, Link, Image } from "./navbar.style";
import userImage from "../../assets/user.png";

export const NavBar = () => {
	return (
		<Container>
			<Link href="#">Trips</Link>
			<Link href="#">Recently Viewed</Link>
			<Link href="#">Bookings</Link>
			<Link href="#">
				<Image src={userImage} alt={"User"} />
			</Link>
		</Container>
	);
};
