import React, { Fragment } from "react";

import useMusicPlayer from "./UseMusicPlayer";

export default function TrackList() {
	const {
		trackList,
		currentTrackName,
		playTrack,
		isPlaying,
	} = useMusicPlayer();

	return (
		<Fragment>
			<ul style={styles.listContainer}>
				{trackList.map((track, index) => (
					<li style={styles.songList}>
						<img
							style={styles.thumbnail}
							src={require(`../media/thumbnail/${track.thumbnail}`)}
							alt="thumbnail"
						/>
						<span>{track.name}</span>
						<button onClick={() => playTrack(index)}>
							{currentTrackName === track.name && isPlaying ? "Pause" : "Play"}
						</button>
					</li>
				))}
			</ul>
		</Fragment>
	);
}

const styles = {
	listContainer: {
		display: "block",
		listStyle: "none",
	},
	songList: {
		display: "flex",
		alignItems: "center",
	},
	thumbnail: {
		width: "120px",
	},
};
