"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const isMobile = useMediaQuery("(max-width:600px)");

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Astronomy Picture of the Day", path: "/apod" },
        { label: "Mars Rover Photos", path: "/mars" },
        { label: "Blogs", path: "/blogs" },
        { label: "NASA Epic Image", path: "/epic" },
    ];

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleNavigation = (path) => {
        router.push(path);
        setDrawerOpen(false);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    React2-Week1-Exercises
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
                            <List>
                                {menuItems.map((item) => (
                                    <ListItem
                                        button
                                        key={item.label}
                                        onClick={() => handleNavigation(item.path)}
                                    >
                                        <ListItemText primary={item.label} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <>
                        {menuItems.map((item) => (
                            <Button
                                key={item.label}
                                color="inherit"
                                onClick={() => handleNavigation(item.path)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
