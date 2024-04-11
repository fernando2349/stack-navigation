import { RouteProp, Router, useNavigation, useRoute } from "@react-navigation/native";
import {Text, View} from "react-native";
import { RootStackParams } from "../../route/StackNavigator";
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";

const ProductScreen = () => { 

const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

const navigation = useNavigation();
useEffect( () : void => {
 navigation.setOptions(
    {
    title: params.name, 
}
 )
}, []);

    return(
    <View style={globalStyles.container}>
         <Text>Product-Screen</Text>
         <Text style={{
            fontSize: 20,
            textAlign: 'center',
            marginTop: 20,
         }}>
           Category : {params.category}
         </Text>

         <Text style={{
            fontSize: 20,
            textAlign: 'center',
            marginTop: 20,
         }}>
           Product: {params.category}
         </Text>
         <Text style={{
            fontSize: 20,
            textAlign: 'center',
            marginTop: 20,
         }}>
           prince: US {params.prince}
         </Text>
         </View>

         
         )

}

export default ProductScreen;
