import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'
export function Routes(){
  return(
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}