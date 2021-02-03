import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { SelectedContent } from "../../models/search";
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

const mapDispatch = (dispatch: Dispatch<AnyAction>) => {
  return {
    setSelectedContent: (selectedContent: SelectedContent) => {
      dispatch({ type: "SET_SELECTED_CONTENT", selectedContent });
    },
    getResultUrlPath: (result: any) => {
      const path = {
        title: `/project/${slugify(result.title || "")}`,
        name: `/category/${result.name}`,
        username: `/user/${userify(result.username || "")}`,
      };

      Object.entries(path).forEach(([key, value]) => {
        if (result.hasOwnProperty(key)) result.path = value;
      });
    },
  };
};

export default connect(mapState, mapDispatch)(SearchTray);
