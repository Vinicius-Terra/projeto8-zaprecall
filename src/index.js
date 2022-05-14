import ReactDOM from "react-dom";
import React from "react";

import Init from "./Init";
import Content from "./Content";





function App() {

    const [Start, setStart] = React.useState(true);

	return (
		<>
            {Start ? <Init setStart={setStart}/> : <Content/>}
		</>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));