import { View } from "react-native";
import InputText from "../../components/TextInput/InputText";

const LoginContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const user = await loginUser(username, password);

      // Handle login success, contohnya, navigasi ke halaman lain
      console.log("Login successful. User:", user);
    } catch (error) {
      // Handle login failure, tampilkan pesan kesalahan, dll.
      console.error("Login failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return;
  <>
    <View>
      <InputText textinputname={"NIDN/NIM"} placeholder={"Masukkan NIDN/NIM"} />
      <InputText textinputname={"Password"} placeholder={"Masukkan Password"} />
    </View>
  </>;
};

export default LoginContainer;
