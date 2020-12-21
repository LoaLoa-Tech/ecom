import Categories from "../Category/List/index";
import Hashtags from "../Hashtag/List/index";
import { useRouter } from "next/router";
import { GoLocation } from "react-icons/go";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Fragment, useContext, useState } from "react";
import { SellerContext } from "../../apollo";
import { AiOutlineClockCircle, AiOutlinePhone } from "react-icons/ai";
export const One = () => {
  const theme = useContext(SellerContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  return (
    <Fragment>
      <Navbar color="dark" className="m-0 p-0">
        <Container>
          <Row className="w-100">
            <Col xs={12} md={4}>
              <center className="text-white">
                <AiOutlinePhone /> {theme.phone}
              </center>
            </Col>
            <Col xs={12} md={4}>
              <center className="text-white">
                <GoLocation /> {theme.address}
              </center>
            </Col>
            <Col xs={12} md={4}>
              <center className="text-white">
                <AiOutlineClockCircle /> {theme.contact}
              </center>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <div className="sticky-top shadow">
        <Navbar
          color="light"
          light
          expand="md"
          className="sticky-top fixed-top py-0 m-navbar"
        >
          <Container>
            <NavbarBrand href="/" className="text-primary font-weight-bold">
              <img
                className="logo"
                src={theme.server + theme?.logo?.publicUrl}
              />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link href="/">
                    <NavLink
                      className="text-main font-weight-bold"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Trang Chủ
                    </NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <Categories
                    nav
                    option="Header"
                    onChoose={() => {
                      setIsOpen(false);
                    }}
                  />
                </UncontrolledDropdown>
                <Hashtags
                  option="Header"
                  onChoose={() => {
                    setIsOpen(false);
                  }}
                />
              </Nav>
              <NavbarText>
                <Button outline className="btn-cirle text-main">
                  <a
                    style={{ color: "inherit" }}
                    href={`tel:${theme.phone.replace(/ /g, "")}`}
                  >
                    Báo Giá
                  </a>
                </Button>
              </NavbarText>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </Fragment>
  );
};
