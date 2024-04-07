import {Pressable, Text, View} from "react-native";
import { globalStyles } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from '../Settings/SettingsScreen';
import PrimaryButton from "../../components/PrimaryButton";

const HomeScreen = () => {
    const navigation = useNavigation();      
    return(
    <View style={globalStyles.container}>

    <PrimaryButton label="Productos" onPress={()=>navigation.navigate('Products' as never)}/>
    <PrimaryButton label="Configuracion" onPress={()=>navigation.navigate('Settings' as never)}/>

         </View>
         )
}

export default HomeScreen;