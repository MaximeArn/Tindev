import { SelectedContent } from "../models/search";

const updateContent = (
  content: null | SelectedContent,
  component: string,
  getContent: Function
) => content && content[component as keyof SelectedContent] && getContent();

export default updateContent;
