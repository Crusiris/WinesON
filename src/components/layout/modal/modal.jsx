import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '4px solid #388e3c',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(10, 10, 12),
    color:theme.palette.success.dark
    
  },
}));

const ModalComponent = ( props ) => {
  const classes = useStyles();
  

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <p id="transition-modal-description">Hemos enviado su pedido con exito</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalComponent;