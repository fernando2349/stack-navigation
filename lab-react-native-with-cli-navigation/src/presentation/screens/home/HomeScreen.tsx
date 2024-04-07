import {Pressable, Text, View} from "react-native";
import { globalStyles } from "../../theme/theme";

const HomeScreen = () => {
    return(
    <View style={globalStyles.container}>
        <Pressable style={globalStyles.primaryButton}>
            <Text style={globalStyles.buttonText}>Productos</Text>
            </Pressable> 
         </View>
         )
}

export default HomeScreen;