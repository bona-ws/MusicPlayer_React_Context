import React from "react";

import useMusicPlayer from "./UseMusicPlayer";

export default function PlayerControl() {
	const {
		isPlaying,
		currentTrackName,
		togglePlay,
		playPreviousTrack,
		playNextTrack,
	} = useMusicPlayer();
	return (
		<div>
			<p>{currentTrackName ? `Now Playing : ${currentTrackName}` : ""}</p>
			<button onClick={playPreviousTrack}>Back</button>
			<button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
			<button onClick={playNextTrack}>Next</button>
		</div>
	);
}
