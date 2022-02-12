import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "mark",
  email: "test@email.com",
  address: "tokyo"
};
export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
