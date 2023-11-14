'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var React = require("react");
var MouseProvider_1 = require("../components/dock/MouseProvider");
var Dock_1 = require("../components/dock/Dock");
var GradientCard_1 = require("../components/dock/GradientCard");
var index_1 = require("./dock/theme/index");
var link_1 = require("next/link");
var home_svg_1 = require("../../assests/home.svg");
var brush_svg_1 = require("../../assests/brush.svg");
var lightbolt_svg_1 = require("../../assests/lightbolt.svg");
var twitter_x_svg_1 = require("../../assests/twitter-x.svg");
var mail_svg_1 = require("../../assests/mail.svg");
var github_svg_1 = require("../../assests/github.svg");
var linkedin_svg_1 = require("../../assests/linkedin.svg");
var night_light_svg_1 = require("../../assests/night-light.svg");
var Navbar = function () {
    return (React.createElement(MouseProvider_1.MouseProvider, null,
        React.createElement(react_1.ChakraProvider, { theme: index_1.theme },
            React.createElement(Dock_1["default"], null,
                React.createElement(Dock_1.DockItem, null,
                    React.createElement(link_1["default"], { href: '/' },
                        React.createElement(GradientCard_1["default"], { src: home_svg_1["default"] }))),
                React.createElement(Dock_1.DockItem, null,
                    React.createElement(link_1["default"], { href: '/craft' },
                        React.createElement(GradientCard_1["default"], { src: brush_svg_1["default"] }))),
                React.createElement(Dock_1.DockItem, null,
                    React.createElement(link_1["default"], { href: '/work' },
                        React.createElement(GradientCard_1["default"], { src: lightbolt_svg_1["default"] }))),
                React.createElement(Dock_1.DockItem, null,
                    React.createElement(GradientCard_1["default"], { src: twitter_x_svg_1["default"] })),
                React.createElement(Dock_1.DockItem, null,
                    React.createElement(GradientCard_1["default"], { src: mail_svg_1["default"] })),
                React.createElement(Dock_1.DockItem, null,
                    React.createElement(GradientCard_1["default"], { src: github_svg_1["default"] })),
                React.createElement(Dock_1.DockItem, null,
                    React.createElement(GradientCard_1["default"], { src: linkedin_svg_1["default"] })),
                React.createElement(Dock_1.DockItem, null,
                    React.createElement(GradientCard_1["default"], { src: night_light_svg_1["default"] }))))));
};
exports["default"] = Navbar;
