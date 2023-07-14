import {  Image, Text, View } from 'react-native';


function Login() {
  return (
    <View>
    	<Image 
				source={require('../../../assets/logo.png')}
				style={{width: '50%'}} 
				resizeMode='contain'
				/>
    </View>
  )
}

export default Login
