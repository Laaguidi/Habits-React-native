import {FlatList, StyleSheet, Text} from "react-native";
import HabitsItem from "./HabitsItem";

function renderHabitsItem(itemData){
    return <HabitsItem { ...itemData.item } />
}

function HabitsList({ habits }){
    return( <FlatList style={styles.container}
                      data={habits}
                      renderItem={renderHabitsItem}
                      keyExtractor={item => item.id}
        />
    );
}

export default HabitsList;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //marginTop: 2
    }
})