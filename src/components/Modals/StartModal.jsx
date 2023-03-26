import React, { Component } from 'react';
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  styled,
} from '@mui/material';

const ModalWindow = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#ffffff',
  boxShadow: 24,
  padding: '20px 30px',
  borderRadius: '15px',
}));

class StartModal extends Component {
  render() {
    const { course, open, onClose } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={onClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <ModalWindow>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                You started {course} quiz
              </Typography>
            </ModalWindow>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default StartModal;
