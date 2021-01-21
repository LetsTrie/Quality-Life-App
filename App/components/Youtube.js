import React, { useState, useCallback, useRef } from 'react';
import { Button, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function App() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') setPlaying(false);
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={'2W6P5Sag63w'}
        onChangeState={onStateChange}
      />
    </View>
  );
}
