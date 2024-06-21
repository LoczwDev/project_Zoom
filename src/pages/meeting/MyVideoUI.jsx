import { useCallStateHooks, ParticipantView } from "@stream-io/video-react-sdk";
const MyVideoUI = () => {
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();
  return (
    <>
      {participants.map((p) => (
        <ParticipantView participant={p} key={p.sessionId} />
      ))}
    </>
  );
};

export default MyVideoUI;
