// import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
// import { useState, useRef, useEffect } from 'react';
// import React from 'react'
// const width = Dimensions.get("screen").height
// const height = Dimensions.get("screen").width
// import Orientation from 'react-native-orientation-locker';
// import PipHandler, { usePipModeListener } from 'react-native-pip-android';
// import { normalize } from 'react-native-elements';
// import {
//     AirplayButton,
//     CastMessage,
//     CenteredControlBar,
//     CenteredDelayedActivityIndicator,
//     ChromecastButton,
//     ControlBar,
//     DEFAULT_THEOPLAYER_THEME,
//     FullscreenButton,
//     LanguageMenuButton,
//     MuteButton,
//     PipButton,
//     PlaybackRateSubMenu,
//     PlayButton,
//     PlayerConfiguration,
//     PlayerEventType,
//     QualitySubMenu,
//     SeekBar,
//     SettingsMenuButton,
//     SkipButton,
//     Spacer,
//     THEOplayer,
//     THEOplayerView,
//     TimeLabel,
//     UiContainer,
// } from 'react-native-theoplayer'
// const Video = (props) => {
//     const playerRef = useRef(null);
//     const [player, setPlayer] = useState(null)
//     // const [pauses, setPause] = useState(false)
//     const [Fullscreen, setFullscreen] = useState(false);
//     const playerConfig: PlayerConfiguration = {
//         license: undefined,
//         chromeless: true,
//         libraryLocation: 'theoplayer',
//         cast: {
//             strategy: 'auto',
//         },
//         mediaControl: {
//             mediaSessionEnabled: true,
//         },
//     };
//     const inPipMode = usePipModeListener();

//     if (inPipMode) {
//         return (
//             <View style={styles.container}>
//                 <Text>PIP Mode</Text>
//             </View>
//         );
//     }
//     // const playerConfig: PlayerConfiguration = {
//     //     license: undefined,     // insert THEOplayer React Native license here
//     // };
//     // const pause = () => {
//     //     setPause(true)
//     // }

//     const onReady = (player: THEOplayer) => {
//         setPlayer(player)
//         console.log(player, 'ffsdfsdfdsfdsfsdfsdfdsfsdfsdf')
//         console.log(player?.pipConfiguration, 'ddddddddddddddd')
//         player.autoplay = true
//         player.source = source
//         player.addEventListener(PlayerEventType.ERROR, console.log);
//         player.addEventListener(PlayerEventType.SOURCE_CHANGE, console.log);
//         player.addEventListener(PlayerEventType.LOADED_DATA, console.log);
//         player.addEventListener(PlayerEventType.LOADED_METADATA, console.log);
//         player.addEventListener(PlayerEventType.READYSTATE_CHANGE, console.log);
//         player.addEventListener(PlayerEventType.PLAY, console.log);
//         player.addEventListener(PlayerEventType.PLAYING, console.log);
//         player.addEventListener(PlayerEventType.PAUSE, console.log);
//         player.addEventListener(PlayerEventType.SEEKING, console.log);
//         player.addEventListener(PlayerEventType.SEEKED, console.log);
//         player.addEventListener(PlayerEventType.ENDED, console.log);
//         player.backgroundAudioConfiguration = { enabled: true };
//         player.pipConfiguration = { startsAutomatically: true };
//     }
//     // useEffect(() => {

//     // }, [])
//     const source: SourceDescription = {
//         sources: [
//             {
//                 src: "https://cdn.theoplayer.com/video/elephants-dream/playlist-single-audio.m3u8",
//                 type: 'application/x-mpegurl',
//             },
//         ],
//     };

//     const [isPlaying, setIsPlaying] = useState(false);
//     const FullscreenToggle = () => {
//         console.log("mansih");

//         if (!Fullscreen) {

//             Orientation.lockToLandscape();
//         } else {

//             Orientation.lockToPortrait();
//         }
//         setFullscreen(!Fullscreen);


//     }


//     return (
//         <View style={Fullscreen ? styles.fullscreenVideo : styles.video}>
//             {/* <TouchableOpacity onPress={onPiPToggle}>
//                 <Text style={{ color: "red" }}>{isPiPActive ? 'Exit PiP' : 'Enter PiP'}</Text>
//             </TouchableOpacity> */}
//             <THEOplayerView config={playerConfig} onPlayerReady={onReady} ref={playerRef}>
//                 {player != null && (
//                     <UiContainer
//                         theme={{ ...DEFAULT_THEOPLAYER_THEME }}
//                         player={player}
//                         behind={<CenteredDelayedActivityIndicator size={50} />}
//                         top={
//                             <ControlBar>
//                                 <LanguageMenuButton />
//                                 <SettingsMenuButton>
//                                     <QualitySubMenu />
//                                     <PlaybackRateSubMenu />
//                                 </SettingsMenuButton>
//                             </ControlBar>
//                         }
//                         center={<CenteredControlBar left={<SkipButton skip={-10} />} middle={<PlayButton />} right={<SkipButton skip={30} />} />}
//                         bottom={
//                             <>
//                                 <ControlBar style={{ justifyContent: 'flex-start' }}>
//                                     <CastMessage />
//                                 </ControlBar>
//                                 <ControlBar>
//                                     <SeekBar />
//                                 </ControlBar>
//                                 <ControlBar>
//                                     <MuteButton />
//                                     <TimeLabel showDuration={true} />
//                                     <Spacer />
//                                     {/* <PipButton onClick={() => PipHandler.enterPipMode(300, 214)}
//                                     >
//                                     </PipButton> */}
//                                     <ControlBar>
//                                     <TouchableOpacity onPress={FullscreenToggle} style={{ 
//                                     top:10,
//                                      bottom: 0,
//                                      right: 1, }}>
//                                         <Image style={{ width: 20, height: 20,backgroundColor:"white" }} source=
//                                         {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/OOjs_UI_icon_fullScreen.svg/1200px-OOjs_UI_icon_fullScreen.svg.png'}} />
//                                           </TouchableOpacity>
//                                 </ControlBar>
//                                    </ControlBar>
//                                     </>
//                         }
//                     />

//                 )}
//             </THEOplayerView>

//         </View>

//     )
// }

// export default Video
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'black'
//     },
//     // video: { width, height: width * .6, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
//     video:
//      { width: "100%", 
//     aspectRatio: width / (height + normalize(100)), 
//     backgroundColor: 'black', 
//      },
//     fullscreenVideo: {
//         width: "100%",
//         aspectRatio: 2 / 1,
//         backgroundColor: 'black',
//         ...StyleSheet.absoluteFill,
//         elevation: 1
//     },
   
// });