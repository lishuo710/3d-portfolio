import React, { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import "./Navbar.module.css";
import { NavLink } from "react-router-dom";

type SingleContainerProps = {
  children: JSX.Element;
};

type MultiContainerProps = {
  children: JSX.Element[];
};

const Section: FunctionComponent<SingleContainerProps> = ({ children }) => {
  return <div className={styles.Section}>{children}</div>;
};

const Container: FunctionComponent<MultiContainerProps> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

const Links: FunctionComponent<MultiContainerProps> = ({ children }) => {
  return <div className={styles.Links}>{children}</div>;
};

type LogoProps = {
  src: string;
};
const Logo: FunctionComponent<LogoProps> = ({ src }) => {
  return <img src={src} className={styles.Logo} />;
};

const List: FunctionComponent<MultiContainerProps> = ({ children }) => {
  return <ul className={styles.List}>{children}</ul>;
};

type TextProps = {
  children: string;
};

const navLinkClassName = ({ isActive }) => {
  return isActive ? styles.ListItem + " " + styles.Active : styles.ListItem;
};

const ListItem: FunctionComponent<TextProps> = ({ children }) => {
  return (
    <NavLink to={"/" + children} className={navLinkClassName}>
      {" "}
      {children}
    </NavLink>
  );
};

const Icons: FunctionComponent<MultiContainerProps> = ({ children }) => {
  return <div className={styles.Icons}>{children}</div>;
};

type IconProps = {
  src: string;
};
const Icon: FunctionComponent<IconProps> = ({ src }) => {
  return <img src={src} />;
};

type ButtonProps = {
  children: string;
};
const Button: FunctionComponent<ButtonProps> = ({ children }) => {
  return <div className={styles.Button}>{children}</div>;
};

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
