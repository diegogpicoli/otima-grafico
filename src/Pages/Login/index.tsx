import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Graphic: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Graphic"
>;

function Login() {
  const { loginIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sec, setSec] = useState(true);
  const [loginFailed, setLoginFailed] = useState(false);
  const navigator = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    if (email && password) {
      const result = loginIn(email, password);
      console.log(result);
      if (result) {
        setLoginFailed(false);
        navigator.navigate("Graphic");
      } else {
        setLoginFailed(true);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={style.viewStyle} behavior="padding">
      <View style={style.viewStyleLogo}>
        <Animatable.Image
          source={require("../../../assets/logo.png")}
          style={{ width: "50%" }}
          resizeMode="contain"
        />
      </View>
      {loginFailed && (
        <View style={style.alertStyle}>
          <Ionicons name="alert-circle-outline" size={24} color="red" />
          <Text style={{ color: "red" }}>Email ou senha inválidos</Text>
        </View>
      )}
      <Animatable.View style={style.viewStyleForm} animation="fadeInUp">
        <View style={style.inputStyle}>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={style.input}
            placeholder="E-mail"
          />
          <Ionicons
            name="mail-outline"
            size={26}
            color="black"
            style={style.icon}
          />
        </View>
        <View style={style.inputStyle}>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={sec}
            style={style.input}
            placeholder="Senha"
          />
          <Ionicons
            name="lock-closed-outline"
            size={26}
            color="black"
            style={style.icon}
          />
          <TouchableOpacity>
            <Ionicons
              name={sec ? "eye" : "eye-off"}
              size={26}
              color="black"
              style={style.iconSecret}
              onPress={() => setSec(!sec)}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogin} style={style.button}>
          <Text style={style.textButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.textCadastro}>
            Ainda não é nosso cliente?{" "}
            <Text style={{ color: "#1E86E0" }}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: "white",
  },
  viewStyleLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -1,
  },
  viewStyleForm: {
    paddingLeft: "5%",
    paddingEnd: "5%",
    flex: 1,
    marginTop: -10,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: -1,
    borderBottomWidth: 1,
    borderBottomColor: "#a1a1a1",
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1E86E0",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  textCadastro: {
    marginTop: 20,
    alignSelf: "center",
    color: "#a1a1a1",
  },
  inputStyle: {
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: 5,
    top: 5,
  },
  iconSecret: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  alertStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
});

export default Login;
