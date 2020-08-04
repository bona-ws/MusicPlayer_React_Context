import React, { createContext, useState } from "react";

import HappyRock from "../media/audio/happyrock.mp3";
import Memories from "../media/audio/memories.mp3";
import Summer from "../media/audio/summer.mp3";

const MusicPlayerContext = createContext([{}, () => {}]);

function MusicPlayerProvider(props) {
	const [state, setstate] = useState({
		audioPlayer: new Audio(),
		tracks: [
			{
				name: "Happy Rock",
				thumbnail: "happyrock.jpg",
				file: HappyRock,
			},
			{
				name: "Memories",
				thumbnail: "memories.jpg",
				file: Memories,
			},
			{
				name: "Summer",
				thumbnail: "summer.jpg",
				file: Summer,
			},
		],
		currentTrackIndex: null,
		isPlaying: false,
	});

	return (
		<MusicPlayerContext.Provider value={[state, setstate]}>
			{props.children}
		</MusicPlayerContext.Provider>
	);
}

export { MusicPlayerContext, MusicPlayerProvider };
