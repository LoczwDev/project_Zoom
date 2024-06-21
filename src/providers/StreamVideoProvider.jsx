import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import StreamStable from "../constants/stable/StreamStable";
import { Loader } from "../components/loader/Loader";
import { useEffect, useState } from "react";
import useUser from "../hooks/UseUser";
import { StreamClient } from "@stream-io/node-sdk";

const API_KEY = StreamStable.PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }) => {
  const [videoClient, setVideoClient] = useState(null);
  const user = useUser();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRXhhcl9LdW4iLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0V4YXJfS3VuIiwiaWF0IjoxNzE4OTM4NzM0LCJleHAiOjE3MTk1NDM1Mzl9.Ql0ukJkPv7myfJ9aonEYJwk95H0tMUGj0OTnqrsA5CE";
  useEffect(() => {
    const initializeStreamClient = async () => {
      if (!user) return;

      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRXhhcl9LdW4iLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0V4YXJfS3VuIiwiaWF0IjoxNzE4OTM4NzM0LCJleHAiOjE3MTk1NDM1Mzl9.Ql0ukJkPv7myfJ9aonEYJwk95H0tMUGj0OTnqrsA5CE";

        const client = new StreamVideoClient({
          apiKey: API_KEY,
          user: {
            id: user._id,
            name: user.name || user._id,
            image: user.avatar.url,
          },
          token: token,
        });

        setVideoClient(client);
      } catch (error) {
        console.error("Error initializing Stream client:", error);
      }
    };

    initializeStreamClient();

    // Clean up the client on unmount
    return () => {
      if (videoClient) {
        videoClient.disconnect();
      }
    };
  }, [user, API_KEY]);
  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;

const tokenProvider = () => {
  const apiKey = StreamStable.PUBLIC_STREAM_API_KEY;
  const secret = StreamStable.STREAM_SECRET_KEY;

  if (!apiKey || !secret) {
    throw new Error("Stream API credentials are missing");
  }

  const user = useUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const streamClient = new StreamClient(apiKey, secret);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;
  const token = streamClient.createToken(user._id, expirationTime, issuedAt);

  return token;
};
