import { connect } from "react-redux";
import Register from "../Register/Register";
import { Authentication } from "../../models/states";

const mapState = ({ register }: Authentication) => ({ register });

connect(mapState)(Register);
