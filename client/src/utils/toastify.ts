import { toast } from "react-toastify";

export const errorToast = (error: string | boolean, callback?: Function) => {
  toast.error(error);
  callback && callback();
};
export const successToast = (success: string | boolean, callback?: Function) => {
  toast.success(success);
  callback && callback();
};
