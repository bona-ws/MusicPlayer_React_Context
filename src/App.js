import React from "react";

import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import PlayerControl from "./components/PlayerControl";

function App() {
	return (
		<MusicPlayerProvider>
			<TrackList />
			<PlayerControl />
		</MusicPlayerProvider>
	);
}

export default App;
