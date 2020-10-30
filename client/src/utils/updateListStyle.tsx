import { ListContent } from "../models/users";
export default (stateList: ListContent[], listName: string) => {
  return stateList.map(({ name, component }) =>
    listName === name
      ? { name, component, selected: true }
      : { name, component }
  );
};
