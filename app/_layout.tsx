import { Stack } from 'expo-router';
import '../global.css';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import Constants from 'expo-constants';

const clerkApiKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkApiKey) {
  throw new Error('Clerk API Raktas nerastas');
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={clerkApiKey} tokenCache={tokenCache}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="gameScreen" options={{ headerShown: false }} />
        <Stack.Screen name="mainPage" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}
