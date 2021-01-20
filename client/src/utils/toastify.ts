import { toast } from "react-toastify";

export const errorToast = (error: string | boolean) => toast.error(error);
export const successToast = (success: string | boolean) =>
  toast.success(success);
