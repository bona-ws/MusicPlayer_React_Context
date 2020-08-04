import { useContext } from "react";

import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

export default function useMusicPlayer() {
	const [state, setState] = useContext(MusicPlayerContext);

	const playTrack = (index) => {
		if (index === state.currentTrackIndex) {
			togglePlay();
		} else {
			state.audioPlayer.pause();
			state.audioPlayer = new Audio(state.tracks[index].file);
			state.audioPlayer.play();
			setState((state) => ({
				...state,
				currentTrackIndex: index,
				isPlaying: true,
			}));
		}
	};

	const togglePlay = () => {
		state.isPlaying ? state.audioPlayer.pause() : state.audioPlayer.play();
		setState((state) => ({ ...state, isPlaying: !state.isPlaying }));

		console.log(state.audioPlayer);
	};

	const playPreviousTrack = () => {
		const newIndex =
			state.currentTrackIndex === 0
				? state.tracks.length - 1
				: state.currentTrackIndex - 1;
		playTrack(newIndex);
	};

	const playNextTrack = () => {
		const newIndex =
			state.currentTrackIndex + 1 === state.tracks.length
				? 0
				: state.currentTrackIndex + 1;
		playTrack(newIndex);
	};

	return {
		playTrack,
		togglePlay,
		playPreviousTrack,
		playNextTrack,
		currentTrackName:
			state.currentTrackIndex !== null &&
			state.tracks[state.currentTrackIndex].name,
		trackList: state.tracks,
		isPlaying: state.isPlaying,
	};
}
