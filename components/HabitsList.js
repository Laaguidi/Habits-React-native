import { FlatList, Text } from 'react-native';

function renderHabitItem(itemData) {
    return <Text>{itemData.item.text}</Text>;
}

function HabitsList({habits}) {

    return <FlatList
            data={habits}
            renderItem={renderHabitItem}
            keyExtractor={(item) => item.id}
           />;
}

export default HabitsList;