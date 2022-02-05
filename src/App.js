import { Container } from "./containers";
import { NavBar, HorizontalLine, Payment, Price, Final } from "./components";

function App() {
	return (
		<Container>
			<NavBar />
			<HorizontalLine />
			<Payment />
			<HorizontalLine />
			<Price />
			<HorizontalLine />
			<Final />
		</Container>
	);
}

export default App;
