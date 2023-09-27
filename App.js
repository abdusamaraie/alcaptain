const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StartScreen from "./screens/StartScreen";
import Splash from "./screens/Splash";
import BodyFatSelectionScreen from "./screens/BodyFatSelectionScreen";
import WeightSelectionScreen from "./screens/WeightSelectionScreen";
import HeightSelectionScreen from "./screens/HeightSelectionScreen";
import AgeSelectionScreen from "./screens/AgeSelectionScreen";
import TrainerRegistration from "./screens/TrainerRegistration";
import GenderSelectionScreen from "./screens/GenderSelectionScreen";
import EmailSignupScreen from "./screens/EmailSignupScreen";
import EmailLoginScreen from "./screens/EmailLoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Nav from "./components/Nav";
import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";
import TopNav4 from "./components/TopNav5";
import TopNav11 from "./components/TopNav11";
import TopNav21 from "./components/TopNav21";
import TopNav31 from "./components/TopNav31";
import TopNav41 from "./components/TopNav41";
import TopNav5 from "./components/TopNav51";
import Days3 from "./components/SelectedDays";
import Days11 from "./components/Days12";
import Weeks2 from "./components/Weeks2";
import Weeks11 from "./components/Weeks11";
import TopNav6 from "./components/TopNav6";
import TopNav7 from "./components/TopNav7";
import TopNav8 from "./components/TopNav8";
import TopNav9 from "./components/TopNav9";
import Nav3 from "./components/Nav3";
import TopNav10 from "./components/TopNav10";
import TopNav111 from "./components/TopNav111";
import TopNav12 from "./components/TopNav12";
import TGymLocationScreen from "./screens/TGymLocationScreen";
import TopNav13 from "./components/TopNav13";
import TEmailSignupScreen from "./screens/TEmailSignupScreen";
import TGymNameAndLocationScree from "./screens/TGymNameAndLocationScree";
import TGymExperienceSelectionSc from "./screens/TGymExperienceSelectionSc";
import TopNav from "./components/TopNav";
import Days from "./components/Days1";
import Selection1 from "./components/Selection1";
import XText from "./components/X";
import DaysSelection from "./components/DaysSelection";
import Weeks from "./components/Weeks";
import Days1 from "./components/Days11";
import Days2 from "./components/Days";
import Weeks1 from "./components/Weeks1";
import Component from "./components/Component";
import Component1 from "./components/Component1";
import Text1 from "./components/Text1";
import TopNav1 from "./components/TopNav1";
import TopNav2 from "./components/TopNav2";
import TopNav3 from "./components/TopNav3";
import LoginScreen from "./screens/LoginScreen";
import HowDidYouHearAboutUsScre from "./screens/HowDidYouHearAboutUsScre";
import DietSelectionScreen from "./screens/DietSelectionScreen";
import GoalSelectionScreen from "./screens/GoalSelectionScreen";
import WorkoutTime3SelectionScree from "./screens/WorkoutTime3SelectionScree";
import WorkoutTime2SelectionScree from "./screens/WorkoutTime2SelectionScree";
import WorkoutTimeSelectionScreen from "./screens/WorkoutTimeSelectionScreen";
import GymExperienceSelectionScree from "./screens/GymExperienceSelectionScree";
import TAgeSelectionScreen from "./screens/TAgeSelectionScreen";
import HomeScreen from "./screens/HomeScreen";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Tajawal-Light": require("./assets/fonts/Tajawal-Light.ttf"),
    "Tajawal-Regular": require("./assets/fonts/Tajawal-Regular.ttf"),
    "Tajawal-Medium": require("./assets/fonts/Tajawal-Medium.ttf"),
    "Tajawal-Bold": require("./assets/fonts/Tajawal-Bold.ttf"),
    "Tajawal-ExtraBold": require("./assets/fonts/Tajawal-ExtraBold.ttf"),
    "Tajawal-Black": require("./assets/fonts/Tajawal-Black.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="StartScreen"
                component={StartScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BodyFatSelectionScreen"
                component={BodyFatSelectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WeightSelectionScreen"
                component={WeightSelectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HeightSelectionScreen"
                component={HeightSelectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AgeSelectionScreen"
                component={AgeSelectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TrainerRegistration"
                component={TrainerRegistration}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GenderSelectionScreen"
                component={GenderSelectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EmailSignupScreen"
                component={EmailSignupScreen}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav1 />,
                })}
              />
              <Stack.Screen
                name="EmailLoginScreen"
                component={EmailLoginScreen}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav2 />,
                })}
              />
              <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav3 />,
                })}
              />
              <Stack.Screen
                name="Nav"
                component={Nav}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Nav />,
                })}
              />
              <Stack.Screen
                name="Nav1"
                component={Nav1}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Nav1 />,
                })}
              />
              <Stack.Screen
                name="Nav2"
                component={Nav2}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Nav2 />,
                })}
              />
              <Stack.Screen
                name="TopNav4"
                component={TopNav4}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav4 />,
                })}
              />
              <Stack.Screen
                name="TopNav11"
                component={TopNav11}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav11 />,
                })}
              />
              <Stack.Screen
                name="TopNav21"
                component={TopNav21}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav21 />,
                })}
              />
              <Stack.Screen
                name="TopNav31"
                component={TopNav31}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav31 />,
                })}
              />
              <Stack.Screen
                name="TopNav41"
                component={TopNav41}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav41 />,
                })}
              />
              <Stack.Screen
                name="TopNav5"
                component={TopNav5}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav5 />,
                })}
              />
              <Stack.Screen
                name="Days3"
                component={Days3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Days11"
                component={Days11}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Weeks2"
                component={Weeks2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Weeks11"
                component={Weeks11}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TopNav6"
                component={TopNav6}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav6 />,
                })}
              />
              <Stack.Screen
                name="TopNav7"
                component={TopNav7}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav7 />,
                })}
              />
              <Stack.Screen
                name="TopNav8"
                component={TopNav8}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav8 />,
                })}
              />
              <Stack.Screen
                name="TopNav9"
                component={TopNav9}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav9 />,
                })}
              />
              <Stack.Screen
                name="Nav3"
                component={Nav3}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Nav3 />,
                })}
              />
              <Stack.Screen
                name="TopNav10"
                component={TopNav10}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav10 />,
                })}
              />
              <Stack.Screen
                name="TopNav111"
                component={TopNav111}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav111 />,
                })}
              />
              <Stack.Screen
                name="TopNav12"
                component={TopNav12}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav12 />,
                })}
              />
              <Stack.Screen
                name="TGymLocationScreen"
                component={TGymLocationScreen}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav12 />,
                })}
              />
              <Stack.Screen
                name="TopNav13"
                component={TopNav13}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav13 />,
                })}
              />
              <Stack.Screen
                name="TEmailSignupScreen"
                component={TEmailSignupScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TGymNameAndLocationScree"
                component={TGymNameAndLocationScree}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav13 />,
                })}
              />
              <Stack.Screen
                name="TGymExperienceSelectionSc"
                component={TGymExperienceSelectionSc}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav111 />,
                })}
              />
              <Stack.Screen
                name="TopNav"
                component={TopNav}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav />,
                })}
              />
              <Stack.Screen
                name="Days"
                component={Days}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Selection1"
                component={Selection1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="XText"
                component={XText}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DaysSelection"
                component={DaysSelection}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Weeks"
                component={Weeks}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Days1"
                component={Days1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Days2"
                component={Days2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Weeks1"
                component={Weeks1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Component"
                component={Component}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Component1"
                component={Component1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Text1"
                component={Text1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TopNav1"
                component={TopNav1}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav1 />,
                })}
              />
              <Stack.Screen
                name="TopNav2"
                component={TopNav2}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav2 />,
                })}
              />
              <Stack.Screen
                name="TopNav3"
                component={TopNav3}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav3 />,
                })}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav />,
                })}
              />
              <Stack.Screen
                name="HowDidYouHearAboutUsScre"
                component={HowDidYouHearAboutUsScre}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DietSelectionScreen"
                component={DietSelectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GoalSelectionScreen"
                component={GoalSelectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WorkoutTime3SelectionScree"
                component={WorkoutTime3SelectionScree}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WorkoutTime2SelectionScree"
                component={WorkoutTime2SelectionScree}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WorkoutTimeSelectionScreen"
                component={WorkoutTimeSelectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GymExperienceSelectionScree"
                component={GymExperienceSelectionScree}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TAgeSelectionScreen"
                component={TAgeSelectionScreen}
                options={(props) => ({
                  headerShown: true,
                  header: () => <TopNav10 />,
                })}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <Splash />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
