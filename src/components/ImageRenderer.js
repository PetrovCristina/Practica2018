import React from 'react'
import { Image, View } from 'react'

export class ImageRenderer extends React.Component {
  shouldComponentUpdate(newProps) {
    return this.props.imageUrl !== newProps.imageUrl
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          margin: 3,
          backgroundColor: 'lightgrey'
        }}>
        <Image
          ref={ref => {
            this.imageRef = ref
          }}
          style={{
            flex: 1
          }}
          onLoad={this.handleOnLoad}
          source={{ uri: this.props.imageUrl }}
        />
      </View>
    )
  }
}
