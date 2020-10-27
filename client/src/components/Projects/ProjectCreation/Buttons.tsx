/** @format */

import React, { MouseEvent, useState, useRef, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ProjectCreationButton } from "../../../models/projects";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lastButton: {
      maxWidth: "50px",
      padding: 0,
    },
  })
);

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
    <ButtonGroup variant="contained" size="large">
      <Button value={2} onClick={handleButtonClick}>
        2
      </Button>
      <Button value={3} onClick={handleButtonClick}>
        3
      </Button>
      <Button value={4} onClick={handleButtonClick}>
        4
      </Button>
      <Button
        onClick={() => {
          setLastButtonInput(true);
        }}
        className={classes.lastButton}
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
