import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View,Button, SectionList, TouchableOpacity, Alert, Image} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const datasource = [
    {
        data: [
            {key: 'Pikachu', card: 25},
            {key: 'Raichu', card: 26}
        ],
        title: "Electric", bgcolor: "yellow", icon: "bolt"
    },
    {
        data: [
            {key: 'Poliwag', card: 60},
            {key: 'Vaporeon', card: 134}
        ],
        title: "Water", bgcolor: "skyblue", icon: "droplet"
    },
    {
        data: [
            {key: 'Charmander', card: 4},
            {key: 'Flareon', card: 136}
        ],
        title: "Fire", bgcolor: "coral", icon: "fire"
    },
    {
        data: [
            {key: 'Sandshrew', card: 27},
            {key: 'SandSlash', card: 28}
        ], title: "Sand", bgcolor: "beige", icon: "mountain-sun"
    }
];

const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity
            style={styles.pokemonBox}
            onPress={() => {
                Alert.alert(item.key + ' selected!');
            }}>
            <Text style={styles.pokemonName}>
                {item.key}
            </Text>
            <Image
                source={{uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' +
                        item.card + '-2x.png'
                }}
                style={styles.pokemonImage}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonBox}>
                <Text style={{fontSize: 30}}> L10 Pokemon</Text>
                <Button title="ADD POKEMON"
                    onPress={() => {
                        Alert.alert('Add Pokemon', 'Coming soon!');
                    }}
                />
            </View>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                renderSectionHeader={({section}) => (
                    <Text
                        style={[
                            styles.headerText,
                            {backgroundColor: section.bgcolor}
                        ]}
                    >
                        <FontAwesome6
                            name={section.icon}
                            size={20}
                            color="black"
                        />
                        {" "}{section.title}
                    </Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'off-white',
        padding: 10,
        paddingTop: 35
    },

    buttonBox: {
        marginBottom: 15
    },

    pokemonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eeeeff',
        borderWidth: 1,
        padding: 10
    },

    pokemonName: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1
    },

    pokemonImage: {
        width: 130,
        height: 180
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        padding: 5
    }
});
