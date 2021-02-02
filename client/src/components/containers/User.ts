import { connect } from "react-redux";
import { State } from "../../models/states";
import User from "../Users/UserProfile/User";

const mapState = ({ users: { user } }: State) => {
  const infos = ["about", "technos", "experience"].map((name: string) => ({
    name,
    value: user[name] || null,
  }));

  return {
    infos,
  };
};

export default connect(mapState)(User);
