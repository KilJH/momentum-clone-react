import React, { useState, useEffect } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { Fade, makeStyles, TextField } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
	icon: {
		position: 'fixed',
		top: '16px',
		left: '16px',
		fontSize: '1.75rem',
		cursor: 'pointer',
		'&:hover': {
			opacity: 0.6,
		},
	},
	switch: {
		marginLeft: '16px',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		border: 'none',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const Settings = (props) => {
	console.log('Settings.js Rendering...');
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [checked, setChecked] = useState(props.is24 ? true : false);
	const [open, setOpen] = useState(false);
	const [changedName, setChangedName] = useState(props.name);

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleChange = (e) => {
		setChecked(!checked);
	};
	const handleName = (e) => {
		e.preventDefault();
		console.log('ff');
		props.setName(changedName);
		setOpen(false);
		handleClose();
	};
	const onChangeName = (e) => {
		setChangedName(e.currentTarget.value);
	};

	useEffect(() => {
		props.setIs24(checked);
	}, [checked]);

	return (
		<div>
			<SettingsIcon
				className={classes.icon}
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			></SettingsIcon>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem>
					24시간 표시
					<Switch
						checked={checked}
						onChange={handleChange}
						color="primary"
						name="checked"
						className={classes.switch}
						inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
				</MenuItem>
				<MenuItem
					onClick={() => {
						setOpen(true);
					}}
				>
					이름변경
				</MenuItem>
				<Modal
					aria-labelledby="spring-modal-title"
					aria-describedby="spring-modal-description"
					className={classes.modal}
					open={open}
					onClose={() => {
						setOpen(false);
					}}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div className={classes.paper}>
							<form onSubmit={handleName}>
								<TextField
									label="이름"
									value={changedName}
									onChange={onChangeName}
								></TextField>
							</form>
						</div>
					</Fade>
				</Modal>
			</Menu>
		</div>
	);
};

export default Settings;
