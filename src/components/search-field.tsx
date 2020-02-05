import React, { useState } from "react"
import { Input, Icon } from "react-native-elements";
import { View, Dimensions, ActivityIndicator } from "react-native";

type SearchFieldsProps = {
  onSearch: (value: string) => void
  loading: boolean
}

export const SearchFields = (props: SearchFieldsProps) => {

  const [search, setSearch] = useState('');

  return (
    <React.Fragment>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
      >
        <View
          style={{ flexGrow: 1 }}
        >
          <Input
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View>
          {
            props.loading ? (
              <ActivityIndicator
                size={32}
              />
            ) : (
              <Icon
                size={32}
                name="search"
                onPress={() => props.onSearch(search)}
              />
            )
          }
        </View>
      </View>
    </React.Fragment>
  )
}