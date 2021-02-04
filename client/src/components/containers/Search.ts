import { connect } from "react-redux";
import { State } from "../../models/states";
import Search from "../Search/Search";
import Category from "../Categories/Category";
import Project from "../Projects/ProjectsList/Project";
import User from "../Users/UsersList/userCard";

const mapState = ({ search: { results } }: State) => ({
  results,
});

const mapDispatch = () => ({
  getRenderedComponent: (result: any) => {
    const components = {
      title: Project,
      username: User,
      name: Category,
    };

    const key = Object.keys(components).find((key) => result[key]);
    return components[key as keyof typeof components];
  },
});

export default connect(mapState, mapDispatch)(Search);
