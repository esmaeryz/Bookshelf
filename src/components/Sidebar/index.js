import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  return (
    <>
      {showSideBar ? (
        <SidebarContainer>
          <Icon>
            <CloseIcon
              onClick={() => {
                setShowSideBar(false);
              }}
            />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to="home">Home</SidebarLink>
              <SidebarLink to="my-books">My Books</SidebarLink>
              <SidebarLink to="browse">Browse</SidebarLink>
              <SidebarLink to="rate">Rate</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/sign-in">Sign In</SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
      ) : null}
    </>
  );
};

export default Sidebar;
