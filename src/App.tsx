import './styles.css';

import * as React from 'react';
import YouTube from 'react-youtube';
import useUrlState from './useUrlState';

type Movement = {
  start: number;
  end: number;
  kihap?: boolean;
};

const VIDEOS = [
  {
    id: 'WhkjRruCBTo',
    label: 'Taegeuk 1 Jang',
    movements: [
      { start: 85.8, end: 89.8 },
      { start: 89.8, end: 91.3 },
      { start: 91.3, end: 92.5 },
      { start: 92.5, end: 94.6 },
      { start: 94.6, end: 96.3 },
      { start: 96.3, end: 98.6 },
      { start: 98.6, end: 100.0 },
      { start: 100.0, end: 101.6 },
      { start: 101.6, end: 103.3 },
      { start: 103.0, end: 104.8 },
      { start: 104.8, end: 107.2 },
      { start: 107.0, end: 108.6 },
      { start: 108.4, end: 111.0 },
      { start: 110.8, end: 112.6 },
      { start: 112.5, end: 114.9 },
      { start: 114.6, end: 116.6 },
      { start: 116.4, end: 119.6, kihap: true },
      { start: 119.2, end: 124.5 },
    ],
  },
  {
    id: 'tGlrUplKHh8',
    label: 'Taegeuk 2 Jang',
    movements: [
      { start: 71.0, end: 75.0 },
      { start: 75.0, end: 76.7 },
      { start: 76.6, end: 78.2 },
      { start: 78.1, end: 79.5 },
      { start: 79.4, end: 81.2 },
      { start: 81.2, end: 82.8 },
      { start: 82.8, end: 84.3 },
      { start: 84.3, end: 85.6 },
      { start: 85.6, end: 88.0 },
      { start: 88.0, end: 89.6 },
      { start: 89.6, end: 91.8 },
      { start: 91.8, end: 93.5 },
      { start: 93.5, end: 95.0 },
      { start: 95.0, end: 96.7 },
      { start: 96.7, end: 98.4 },
      { start: 98.5, end: 100.0 },
      { start: 100.0, end: 102.1 },
      { start: 102.1, end: 104.1 },
      { start: 104.1, end: 106.3, kihap: true },
      { start: 106.9, end: 112.5 },
    ],
  },
  {
    id: 'ksSqKt0UkWo',
    label: 'Taegeuk 3 Jang',
    movements: [
      { start: 74.5, end: 80.0 },
      { start: 80.0, end: 82.0 },
      { start: 82.0, end: 84.2 },
      { start: 84.2, end: 85.6 },
      { start: 85.6, end: 87.7 },
      { start: 87.7, end: 89.3 },
      { start: 89.3, end: 90.7 },
      { start: 90.7, end: 92.9 },
      { start: 92.9, end: 95.2 },
      { start: 95.2, end: 96.7 },
      { start: 96.7, end: 98.0 },
      { start: 98.0, end: 99.5 },
      { start: 99.5, end: 101.6 },
      { start: 101.6, end: 103.1 },
      { start: 103.1, end: 105.2 },
      { start: 105.3, end: 107.1 },
      { start: 107.1, end: 108.8 },
      { start: 108.8, end: 110.8 },
      { start: 110.8, end: 113.5, kihap: true },
      { start: 114.5, end: 120.5 },
    ],
  },
  {
    id: 'Lt917gacJho',
    label: 'Taegeuk 4 Jang',
    movements: [
      { start: 94.5, end: 99.0 },
      { start: 100.0, end: 102.1 },
      { start: 102.1, end: 103.6 },
      { start: 103.6, end: 104.9 },
      { start: 104.9, end: 106.3 },
      { start: 106.3, end: 107.9 },
      { start: 107.9, end: 109.9 },
      { start: 109.9, end: 114.0 },
      { start: 114.0, end: 115.4 },
      { start: 115.4, end: 117.7 },
      { start: 117.7, end: 119.1 },
      { start: 119.1, end: 121.2 },
      { start: 121.2, end: 122.9 },
      { start: 122.9, end: 124.8 },
      { start: 124.8, end: 127.1 },
      { start: 127.1, end: 129.5 },
      { start: 129.5, end: 131.9 },
      { start: 131.9, end: 134.3, kihap: true },
      { start: 135.0, end: 140.9 },
    ],
  },
  {
    id: 'VdqNEAHWCBM',
    label: 'Taegeuk 5 Jang',
    movements: [
      { start: 77.0, end: 81.0 },
      { start: 81.5, end: 82.8 },
      { start: 82.8, end: 84.1 },
      { start: 84.1, end: 85.4 },
      { start: 85.4, end: 86.6 },
      { start: 86.7, end: 88.6 },
      { start: 88.6, end: 91.1 },
      { start: 91.1, end: 93.7 },
      { start: 93.7, end: 95.1 },
      { start: 95.1, end: 96.4 },
      { start: 96.4, end: 97.9 },
      { start: 97.9, end: 99.2 },
      { start: 99.2, end: 100.5 },
      { start: 100.5, end: 102.6 },
      { start: 102.6, end: 105.3 },
      { start: 105.3, end: 106.5 },
      { start: 106.4, end: 109.2 },
      { start: 109.1, end: 110.7 },
      { start: 110.6, end: 113.4 },
      { start: 113.3, end: 115.5 },
      { start: 115.5, end: 118.0, kihap: true },
      { start: 118.0, end: 126.0 },
    ],
  },
  {
    id: 'jcBwWo4wN7c',
    label: 'Taegeuk 6 Jang',
    movements: [
      { start: 61.0, end: 65.3 },
      { start: 65.3, end: 67.3 },
      { start: 67.3, end: 69.5 },
      { start: 69.5, end: 70.8 },
      { start: 70.8, end: 73.2 },
      { start: 73.2, end: 74.5 },
      { start: 74.5, end: 77.7 },
      { start: 77.7, end: 79.8 },
      { start: 79.8, end: 81.8 },
      { start: 81.8, end: 83.9 },
      { start: 83.9, end: 91.0 },
      { start: 91.0, end: 92.7 },
      { start: 92.7, end: 95.4, kihap: true },
      { start: 95.4, end: 97.7 },
      { start: 97.7, end: 98.9 },
      { start: 98.9, end: 101.3 },
      { start: 101.3, end: 102.9 },
      { start: 102.9, end: 104.4 },
      { start: 104.4, end: 106.2 },
      { start: 106.2, end: 108.5 },
      { start: 108.5, end: 115.0 },
    ],
  },
  {
    id: '6FUM1p6qqhQ',
    label: 'Taegeuk 7 Jang',
    movements: [
      { start: 65.0, end: 71.0 },
      { start: 71.5, end: 73.4 },
      { start: 73.4, end: 75.4 },
      { start: 75.4, end: 76.8 },
      { start: 76.8, end: 78.9 },
      { start: 78.9, end: 80.2 },
      { start: 80.2, end: 81.7 },
      { start: 81.7, end: 84.2 },
      { start: 84.2, end: 87.1 },
      { start: 87.1, end: 94.5 },
      { start: 95.3, end: 97.3 },
      { start: 97.3, end: 99.1 },
      { start: 99.1, end: 100.6 },
      { start: 100.6, end: 102.7 },
      { start: 102.7, end: 104.0 },
      { start: 104.0, end: 105.6 },
      { start: 105.6, end: 107.7 },
      { start: 107.7, end: 109.2 },
      { start: 109.2, end: 110.9 },
      { start: 110.9, end: 112.9 },
      { start: 112.7, end: 114.2 },
      { start: 114.1, end: 116.3 },
      { start: 116.3, end: 117.3 },
      { start: 117.2, end: 119.5, kihap: true },
      { start: 119.5, end: 125.3 },
    ],
  },
  {
    id: 'Gr_Je2ZkgkI',
    label: 'Taegeuk 8 Jang',
    movements: [
      { start: 71.5, end: 75.9 },
      { start: 75.9, end: 79.0 },
      { start: 79.0, end: 82.0, kihap: true },
      { start: 82.0, end: 83.3 },
      { start: 83.3, end: 85.0 },
      { start: 85.0, end: 92.9 },
      { start: 92.9, end: 95.4 },
      { start: 95.4, end: 103.5 },
      { start: 103.5, end: 105.9 },
      { start: 105.9, end: 108.7 },
      { start: 108.7, end: 109.9 },
      { start: 109.9, end: 111.9 },
      { start: 111.8, end: 113.2 },
      { start: 113.2, end: 114.5 },
      { start: 114.5, end: 116.4 },
      { start: 116.4, end: 117.9 },
      { start: 117.9, end: 119.1 },
      { start: 119.1, end: 123.2, kihap: true },
      { start: 123.2, end: 124.6 },
      { start: 124.6, end: 126.7 },
      { start: 126.7, end: 128.0 },
      { start: 128.0, end: 130.4 },
      { start: 130.4, end: 137.0 },
    ],
  },
  {
    id: 'mGa60JDtWmg',
    label: 'Koryo',
    movements: [
      { start: 53.0, end: 57.5 },
      { start: 58.0, end: 59.2 },
      { start: 59.2, end: 61.9 },
      { start: 61.9, end: 63.2 },
      { start: 63.2, end: 64.4 },
      { start: 64.4, end: 67.2 },
      { start: 67.2, end: 68.4 },
      { start: 68.4, end: 69.8 },
      { start: 69.8, end: 71.6 },
      { start: 71.6, end: 73.6, kihap: true },
      { start: 73.6, end: 75.5 },
      { start: 75.5, end: 76.8 },
      { start: 76.8, end: 78.8 },
      { start: 78.8, end: 79.8 },
      { start: 79.8, end: 81.2 },
      { start: 81.2, end: 84.5 },
      { start: 84.5, end: 85.4 },
      { start: 85.4, end: 87.5 },
      { start: 87.5, end: 88.5 },
      { start: 88.5, end: 91.7 },
      { start: 91.7, end: 92.6 },
      { start: 92.6, end: 94.7 },
      { start: 94.7, end: 102.7 },
      { start: 102.7, end: 104.8 },
      { start: 104.8, end: 106.4 },
      { start: 106.4, end: 108.3 },
      { start: 108.3, end: 109.7, kihap: true },
      { start: 110.5, end: 118.0 },
    ],
  },
  {
    id: 'CRGVSOmaQaY',
    label: 'Keumgang',
    movements: [
      { start: 0.0, end: 1.0 },
      // TODO
    ],
  },
  {
    id: 'Q4dYdFRbE4U',
    label: 'Taebaek',
    movements: [
      { start: 0.0, end: 1.0 },
      // TODO
    ],
  },
  {
    id: 'RB-7mBtvtZw',
    label: 'Pyongwon',
    movements: [
      { start: 0.0, end: 1.0 },
      // TODO
    ],
  },
  {
    id: 'hOZB0IESJ38',
    label: 'Sipjin',
    movements: [
      { start: 60.0, end: 65.0 },
      { start: 65.0, end: 69.6 },
      { start: 69.6, end: 71.5 },
      { start: 71.5, end: 78.5 },
      { start: 78.5, end: 80.1 },
      { start: 80.0, end: 82.2, kihap: true },
      { start: 82.0, end: 83.9 },
      { start: 83.9, end: 86.0 },
      { start: 86.0, end: 93.2 },
      { start: 93.2, end: 94.7 },
      { start: 94.7, end: 96.6, kihap: true },
      { start: 96.6, end: 98.1 },
      { start: 98.2, end: 100.3 },
      { start: 100.3, end: 107.3 },
      { start: 107.3, end: 108.8 },
      { start: 108.8, end: 119.0 },
      { start: 119.0, end: 121.5 },
      { start: 121.5, end: 127.0 },
      { start: 127.0, end: 131.0 },
      { start: 131.0, end: 133.1 },
      { start: 133.0, end: 144.0 },
      { start: 144.0, end: 146.4 },
      { start: 146.4, end: 148.1 },
      { start: 148.1, end: 150.5, kihap: true },
      { start: 150.5, end: 160.5 },
      { start: 160.5, end: 162.2 },
      { start: 162.2, end: 163.6 },
      { start: 163.6, end: 165.1 },
      { start: 165.1, end: 167.2 },
      { start: 167.2, end: 174.0 },
    ],
  },
  {
    id: 'nur2WsN7dQw',
    label: 'Jitae',
    movements: [
      { start: 0.0, end: 1.0 },
      // TODO
    ],
  },
  {
    id: 'FBxCzK5c4bE',
    label: 'Cheonkwon',
    movements: [
      { start: 0.0, end: 1.0 },
      // TODO
    ],
  },
  {
    id: 'lRp1JE7f-a8',
    label: 'Hansu',
    movements: [
      { start: 0.0, end: 1.0 },
      // TODO
    ],
  },
  {
    id: 'jWClKVOrqJ8',
    label: 'Ilyo',
    movements: [
      { start: 0.0, end: 1.0 },
      // TODO
    ],
  },
];

function getPoomsae(id: string, movements: Movement[] | null) {
  if (movements != null) {
    return {
      id,
      label: 'Custom',
      movements,
    };
  }
  return VIDEOS.find((video) => video.id === id);
}

export default function App() {
  const [poomsaeId, setPoomsaeId] = useUrlState('poomsaeId', VIDEOS[0].id);
  const [isPoomsaeSelectorShown, setIsPoomsaeSelectorShown] =
    React.useState(false);
  const setPoomsae = React.useCallback((poomsaeId: string): void => {
    setPoomsaeId(poomsaeId);
    setMovementId(0);
    setIsPoomsaeSelectorShown(false);
    internalPlayerRef.current = null;
  }, []);

  const [movementId, setMovementId] = useUrlState('movementId', 0);
  const [isMovementSelectorShown, setIsMovementSelectorShown] =
    React.useState(false);
  const setMovement = React.useCallback((movementId: number): void => {
    setMovementId(movementId);
    setIsMovementSelectorShown(false);
    internalPlayerRef.current = null;
  }, []);

  const [movements] = useUrlState('movements', null);

  const video = getPoomsae(poomsaeId, movements);
  const movementCount = video?.movements.length ?? 0;
  const movement = video?.movements[movementId] ?? { start: 0, end: 0 };

  const internalPlayerRef = React.useRef<any>(null);

  // loop the video at the movement
  React.useEffect(() => {
    const interval = setInterval(function () {
      internalPlayerRef.current
        ?.getCurrentTime()
        ?.then((currentTime: number): void => {
          if (currentTime < movement.start || currentTime >= movement.end) {
            internalPlayerRef.current?.seekTo(movement.start);
          }
        });
    }, 10);
    return () => clearInterval(interval);
  }, [movement]);

  return (
    <div className="container">
      <div className="controls"></div>
      <div className="video-container">
        <YouTube
          key={video?.id}
          ref={(playerRef) => {
            internalPlayerRef.current = playerRef?.getInternalPlayer();
          }}
          videoId={video?.id}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
              controls: 0,
              loop: 0,
              mute: 1,
              playsinline: 1,
              rel: 0,
            },
          }}
        />
      </div>
      <div className="overlay" onClick={() => {}}>
        <div className="controls">
          <div
            className="button poomsae"
            onClick={() => setIsPoomsaeSelectorShown(true)}>
            {video?.label ?? 'Choose Poomsae'}
          </div>
          <div className="movement">
            <div
              className="button previous"
              onClick={() =>
                setMovementId((value: number) => Math.max(0, value - 1))
              }>
              <LeftChevron />
            </div>
            <div
              className="button"
              onClick={() => setIsMovementSelectorShown(true)}>
              {movementId + 1} / {movementCount}
            </div>
            <div
              className="button next"
              onClick={() =>
                setMovementId((value: number) =>
                  Math.min(movementCount - 1, value + 1),
                )
              }>
              <RightChevron />
            </div>
          </div>
        </div>
        {movement.kihap && <div className="kihap">Kihap!</div>}
        {isPoomsaeSelectorShown && (
          <div className="overlay">
            <div className="controls">
              <div
                className="button"
                onClick={() => setIsPoomsaeSelectorShown(false)}>
                <LeftChevron />
                <span style={{ marginLeft: 12 }}>Back</span>
              </div>
            </div>
            <div className="selector">
              {VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="button"
                  onClick={() => setPoomsae(video.id)}>
                  {video.label}
                </div>
              ))}
            </div>
          </div>
        )}
        {isMovementSelectorShown && (
          <div className="overlay">
            <div className="controls">
              <div
                className="button"
                onClick={() => setIsMovementSelectorShown(false)}>
                <LeftChevron />
                <span style={{ marginLeft: 12 }}>Back</span>
              </div>
            </div>
            <div className="selector">
              {Object.keys(video?.movements ?? {})
                .map((movement) => parseInt(movement, 10))
                .map((movement) => (
                  <div
                    key={movement}
                    className="button"
                    onClick={() => setMovement(movement)}>
                    {movement + 1}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function LeftChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
}

function RightChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}
