import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from "../colors"
const DDLinkButton = ({ label, style, ...rest }) => {
    return (
        <TouchableOpacity {...rest}>
            <Text style={{ color: colors.secondary, fontWeight: 'bold' }}> {label} </Text>
        </TouchableOpacity>
    )
}

export default DDLinkButton

const styles = StyleSheet.create({
    linkText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})