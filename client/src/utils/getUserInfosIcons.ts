import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationCityOutlined";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";

const icons = {
  email: MailOutlineOutlinedIcon,
  username: PermIdentityOutlinedIcon,
  city: LocationCityOutlinedIcon,
  age: PersonPinCircleIcon,
};

export default (key: string) => icons[key as keyof typeof icons];
