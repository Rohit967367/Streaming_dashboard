import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../Store/user";

const Head = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const closeUserMenu = (event) => {
    event.preventDefault();
    setAnchorElUser(null);
  };

  const handleCloseUserMenu = (e) => {
    e.preventDefault();
    dispatch(removeUser());

    router.push("/login", undefined, { shallow: true });
    signOut();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h" component="div">
              Dashboard
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Logout">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={userData.name} src={userData.image} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={closeUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Head;
