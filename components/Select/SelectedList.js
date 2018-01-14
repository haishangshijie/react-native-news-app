import React, {Component} from 'react';
import {View} from 'react-native';
import SelectedItem from './SelectedItem';

export default class SelectList extends Component{
    renderSelectedList = () => {
        return this.props.selected.map((item,index) => {
            return <SelectedItem key={index} item={item}/>
        })
    }
    render () {
        return (
            <View style={styles.container}>
                {this.renderSelectedList()}
            </View>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
}