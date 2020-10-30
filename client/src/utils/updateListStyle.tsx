import { ListContent } from "../models/users";
export default (stateList: ListContent[], listName: string) =>
  stateList.map((content) =>
    content.name === listName
      ? { ...content, selected: true }
      : { ...content, selected: false }
  );
