import { StackActions, useNavigation } from "@react-navigation/native";
import {Text, View} from "react-native";
import { globalStyles } from '../../theme/theme';
import PrimaryButton from "../../components/PrimaryButton";

const SettingsScreen = () => {
    const navigator = useNavigation();
    return(
    <View style = {globalStyles.container}>
         <Text style = {{marginBottom: 10}}>Settings-Screen</Text>

         <PrimaryButton label="regresar" onPress={()=>navigator.goBack}/>
         <PrimaryButton label="Home" onPress={()=>navigator.dispatch(StackActions.popToTop())}/>
         </View>
         )

}

export default SettingsScreen;