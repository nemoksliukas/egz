import { Stack } from 'expo-router';
import '../global.css';
import { ClerkProvider } from '@clerk/clerk-expo';
import Constants from 'expo-constants';

const clerkApiKey = Constants.manifest?.extra?.clerkPublishableKey || Constants.expoConfig?.extra?.clerkPublishableKey;


console.log('expoConfig:', Constants.expoConfig);
console.log('manifest:', Constants.manifest);
console.log('clerkApiKey:', clerkApiKey);


if (!clerkApiKey) {
  throw new Error('Clerk API Raktas nerastas');
}


export default function Layout() {
  return (
    <ClerkProvider publishableKey={clerkApiKey}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* Add other screens as needed */}
      </Stack>
    </ClerkProvider>
  );
}
