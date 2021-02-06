import { connect } from "react-redux";
import { State } from "../../models/states";
import SearchTray from "../NavBar/SearchTray";
import slugify from "../../utils/slugify";
import userify from "../../utils/whiteSpaceRemover";
import { User } from "../../models/users";
import { Project } from "../../models/projects";
import { Category } from "../../models/categories";

const mapState = ({ search: { results } }: State) => ({
  results,
});

const mapDispatch = () => {
  return {
    getResultUrlPath: (result: User | Project | Category) => {
      const paths = [
        "title" in result && `/project/${slugify(result.title)}`,
        "name" in result && `/category/${result.name}`,
        "username" in result && `/user/${userify(result.username)}`,
      ];

      paths.forEach((value) => {
        if (value) result.path = value;
      });
    },
  };
};

export default connect(mapState, mapDispatch)(SearchTray);
