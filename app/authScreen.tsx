import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Text, View, Button, Platform } from 'react-native';
import { Link } from 'expo-router';
import { useOAuth, useAuth } from '@clerk/clerk-expo';  // <-- import useAuth here
import * as Linking from 'expo-linking';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    if (Platform.OS !== 'web') {
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function Page() {
  useWarmUpBrowser();

  const { signOut } = useAuth();  // <-- get signOut function

  React.useEffect(() => {
    // Sign out on mount to force login every time
    signOut().catch(() => {
      // handle error or ignore if already signed out
    });
  }, []);

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
        // Optionally try passing prompt param if supported:
        // strategyOptions: { prompt: 'login' },
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <View>
      <Link href="/">
        <Text>Home</Text>
      </Link>
      <Button title="Sign in with Google" onPress={onPress} />
    </View>
  );
}
