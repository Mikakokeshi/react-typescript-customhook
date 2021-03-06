import { VFC } from "react";
import { userProfile } from "../types/userProfile";

type Props = {
  user: userProfile;
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  const style = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
  };
  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>email</dt>
        <dd>{user.email}</dd>
        <dt>adress</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
