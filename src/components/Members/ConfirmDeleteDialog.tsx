import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import { getDisplayName } from '../../utils';

type ConfirmDeleteDialogProps = {

};

enum DIALOG_TYPES {
  'MEMBERSHIP',
  'MEMBERSHIP_MAILCHIMP',
  'LOGIN'
}

const DIALOG_CONTENT_PRESETS = user => ({
  [DIALOG_TYPES.MEMBERSHIP]: {
    title: 'Remove membership?',
    text: `${getDisplayName(user?.profile)} (${user?.email}) will no longer be able to access this workshop.`
  },
  [DIALOG_TYPES.MEMBERSHIP_MAILCHIMP]: {
    title: 'Remove membership?',
    text: `${getDisplayName(user?.profile)} (${user?.email}) will no longer be able to access this workshop. 
    They will still be subscribed to the Mailchimp mailing list but tagged as OUT. 
    If you have already updated their subscription in Mailchimp, just use the sync with Mailchimp button instead.`
  },
  [DIALOG_TYPES.LOGIN]: {
    title: 'Remove login?',
    text: `${getDisplayName(user?.profile)} (${user?.email}) will no longer be able to login and access this or any other workshops. 
    Their login will be completely disabled and will require manual intervention to restore. 
    Do this only as a last resort.`
  }
})

const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({ dialogSettings, handleClose }) => {
  if (!dialogSettings || !handleClose) return null;
  const { user, dialogType, handleDelete } = dialogSettings;
  if (!user || !handleDelete) return null;
  const preset = DIALOG_TYPES[dialogType]
  const dialogContent = DIALOG_CONTENT_PRESETS(user)[preset]
  return <Dialog
    open={user}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {dialogContent.title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {dialogContent.text}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => handleDelete().then(handleClose)}>Yes, REMOVE</Button>
      <Button onClick={handleClose} autoFocus>No</Button>
    </DialogActions>
  </Dialog>
}
export default ConfirmDeleteDialog;