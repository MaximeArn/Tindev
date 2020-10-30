/** @format */

import React, { MouseEvent, useState, useRef, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ProjectCreationButton } from "../../../models/projects";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import usestyles from "../../../styles/MUI/TeamSizeButtons";
import useStyles from "../../../styles/MUI/TeamSizeButtons";

const Buttons = ({ getProjectTeamSize }: ProjectCreationButton) => {
  const handleButtonClick = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement> | ChangeEvent<HTMLInputElement>) => {
    getProjectTeamSize(currentTarget.value);
  };
  const input = useRef<HTMLInputElement>(null);
  const [lastButtonInput, setLastButtonInput] = useState(false);
  const classes = useStyles();
  return (
    <ButtonGroup
      variant="contained"
      size="large"
      className={classes.buttonGroup}
    >
      <Button className={classes.button} value={2} onClick={handleButtonClick}>
        2
      </Button>
      <Button className={classes.button} value={3} onClick={handleButtonClick}>
        3
      </Button>
      <Button className={classes.button} value={4} onClick={handleButtonClick}>
        4
      </Button>
      <Button
        className={(classes.button, classes.lastButton)}
        onClick={() => {
          setLastButtonInput(true);
        }}
        value={input.current?.value}
      >
        {lastButtonInput ? (
          <input
            ref={input}
            type="number"
            onChange={handleButtonClick}
            className="teamSize-Input"
            defaultValue={5}
            min={5}
          />
        ) : (
          <FontAwesomeIcon icon={faPlus} color="grey" />
        )}
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
