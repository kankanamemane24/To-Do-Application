import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ActionButton from './ActionButton';
import { useTheme } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ReplaySharpIcon from '@material-ui/icons/ReplaySharp';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  actions: {
    display: 'inline-grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: 2
  },
  iconColor: {
    color: theme.palette.primary.main
  }
}));

export default function ActionButtonGroup(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.actions}>
      {props.status === 'Close' ? (
        <div>
          <ActionButton
            title="ReOpen"
            onClick={() => props.updateStatus('Open')}
          >
            <ReplaySharpIcon className={classes.iconColor} />
          </ActionButton>
        </div>
      ) : (
        <div>
          <ActionButton
            title="Done"
            onClick={() => props.updateStatus('Close')}
          >
            <DoneIcon className={classes.iconColor} />
          </ActionButton>
        </div>
      )}
      <div>
              <ActionButton title="Edit"
                  onClick={props.editTask}
              >
          <EditIcon className={classes.iconColor} />
        </ActionButton>
          </div>
    </div>
  );
}