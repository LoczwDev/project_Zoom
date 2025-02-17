import { useState } from "react";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/UseUser";
import { useGetCallById } from "../../hooks/useGetCallById";
import Alert from "../../components/ui/Alert";
import MeetingSetup from "../../components/meeting/MeetingSetup";
import { Loader } from "../../components/loader/Loader";

const MeetingPage = () => {
  const { id } = useParams();
  const user = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (isCallLoading) return <Loader />;

  if (!call) {
    return (
      <p className="text-center text-3xl font-bold text-white">
        Call Not Found
      </p>
    );
  }

  const notAllowed =
    call.type === "invited" &&
    (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowed) {
    return <Alert title="You are not allowed to join this meeting" />;
  }

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            "<MeetingRoom />"
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
