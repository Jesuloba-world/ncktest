import { Container } from "./containers";
import { NavBar, HorizontalLine, Payment } from "./components";

function App() {
	return (
		<Container>
			<NavBar />
			<HorizontalLine />
			<Payment />
			<HorizontalLine />
		</Container>
	);
}

export default App;
