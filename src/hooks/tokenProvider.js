import React from "react";
import StreamStable from "../constants/stable/StreamStable";
import useUser from "./UseUser";
import { StreamClient } from "@stream-io/node-sdk";

const tokenProvider = () => {
  const apiKey = StreamStable.PUBLIC_STREAM_API_KEY;
  const secret = StreamStable.STREAM_SECRET_KEY;

  if (!STREAM_API_KEY || !STREAM_API_SECRET) {
    throw new Error("Stream API credentials are missing");
  }

  const user = useUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

  streamClient = new StreamClient(apiKey, secret);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  return streamClient.createToken(user._id, expirationTime, issuedAt);
};

export default tokenProvider;
