import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PrimaryButton from "../../components/PrimaryButton";
import { globalStyles } from "../../theme/theme";
import {  NavigationAction, type NavigationProp, useNavigation } from "@react-navigation/native";
import { type  RootStackParams } from "../../route/StackNavigator";

const productos = [
    { id: 1, name: 'Camiseta de algodón', price: 20.99, category: 'Ropa' },
    { id: 2, name: 'Zapatos deportivos', price: 49.99, category: 'Calzado' },
    { id: 3, name: 'Portátil HP', price: 799.99, category: 'Tecnología' },
    { id: 4, name: 'Libro de cocina', price: 14.50, category: 'Libros' },
    { id: 5, name: 'Gafas de sol polarizadas', price: 35.75, category: 'Accesorios' },
    { id: 6, name: 'Reloj inteligente', price: 129.99, category: 'Tecnología' }
  ];
  const ProductsScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    return (
        <View style={globalStyles.container}>
            <Text style={{marginBottom:10, fontSize:20}}>Productos</Text>


                {/* FlatList para renderizar productos */}
                <FlatList
                    data={productos}
                    renderItem={
                        ({item }) => (
                        // Componente PrimaryButton para cada producto
                        <PrimaryButton
                            onPress={() : void => {navigation.navigate('Product', { id: item.id, name:item.name, prince: item.price, category: item.category })}}
                                // Lógica para manejar el botón presionado
                            label={item.name}
                        />
                    )
                }
                />

                <Text style={{marginBottom: 10, fontSize: 20}}>Ajustes</Text>
                <PrimaryButton label="Configuracion" onPress={() => navigation.navigate('Settings' as never)} />
                {/* Título para la sección de ajustes */}
                <Text style={{ marginBottom: 10, fontSize: 20 }}>Ajustes</Text>
            </View>
    )
}

export default ProductsScreen;

