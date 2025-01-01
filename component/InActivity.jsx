import ReactNativeInactivity from "react-native-inactivity";
import AuthScreen from "./AuthScreen";

export default function InactivityTimer() {
  const [inactivityTimeoutCount, setInactivityTimeoutCount] = React.useState(0);
  const [isActive, __] = React.useState(true);
  const [loop, _] = React.useState(true);
  return (
    <View style={{ flex: 1, paddingTop: "20%" }}>
      <ReactNativeInactivity
        isActive={isActive}
        onInactive={() => setInactivityTimeoutCount(inactivityTimeoutCount + 1)}
        timeForInactivity={2000}
        restartTimerOnActivityAfterExpiration={false}
        loop={loop}
      >
        <AuthScreen />
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text style={{ color: "black" }}>
            Timeout Count: {inactivityTimeoutCount}
          </Text>
        </View>
      </ReactNativeInactivity>
    </View>
  );
}
