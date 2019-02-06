import React from "react";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

import Routes from "./routes";

const App = () => <Routes />;

export default App;
