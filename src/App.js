import { Container } from "./containers";
import { NavBar, HorizontalLine, Payment, Price } from "./components";

function App() {
	return (
		<Container>
			<NavBar />
			<HorizontalLine />
			<Payment />
			<HorizontalLine />
			<Price />
			<HorizontalLine />
		</Container>
	);
}

export default App;
