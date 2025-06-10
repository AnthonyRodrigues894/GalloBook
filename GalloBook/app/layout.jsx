import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="quero-ler" options={{ headerShown: false }} />
        <Stack.Screen name="lendo" options={{ headerShown: false }} />
        <Stack.Screen name="lidos" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
