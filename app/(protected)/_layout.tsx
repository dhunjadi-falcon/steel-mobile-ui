import { Href, Redirect, Stack } from "expo-router";
import React from "react";

export default function ProtectedLayout() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Redirect href={"/login" as Href} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
