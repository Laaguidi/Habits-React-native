import { FlatList } from 'react-native';
import HabitItem from "./HabitItem";

function renderHabitItem(itemData) {
    return <HabitItem { ...itemData.item } text={itemData.item.description} />;
}

function HabitsList({habits}) {

    return <FlatList
            data={habits}
            renderItem={renderHabitItem}
            keyExtractor={(item) => item.id}
           />;
}

export default HabitsList;