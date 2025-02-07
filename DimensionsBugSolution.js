The solution is to use `Dimensions.addEventListener` to listen for changes in window dimensions and update the state accordingly. This ensures that the dimensions are always available when needed, even during initialization or orientation changes.

```javascript
import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const MyComponent = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });
    //Get initial dimensions
    setDimensions({ width: Dimensions.get('window').width, height: Dimensions.get('window').height });
    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default MyComponent;
```