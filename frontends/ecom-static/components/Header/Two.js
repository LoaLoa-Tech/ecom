import { Container } from "reactstrap";
import { useRouter } from "next/router";

import { useQuery, gql } from "@apollo/client";
import { useContext } from "react";
import { SellerContext } from "../../apollo/SellerProvider";
export const Two = () => {
  const router = useRouter();
  const theme = useContext(SellerContext);
  const { data } = useQuery(
    gql`
      query {
        user @client
      }
    `,
    {}
  );
  const isLogin = data?.user;
  // ANIMATION
  return (
    <section
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 100,
        top: 0,
        backgroundColor: theme.productBackgroundColor,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container fluid>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 40,
            width: "100%",
          }}
        >
          <Logo
            style={{
              float: "left",
              marginLeft: theme.spacing(3),
              marginRight: theme.spacing(3),
              height: "100%",
            }}
            onClick={() => {
              router.push("/");
            }}
          />
          <h1
            style={{
              float: "left",
              marginLeft: theme.spacing(3),
              fontSize: "0.9rem",
              width: "100%",
              padding: 0,
              margin: 0,
              color: theme.primary,
              cursor: "pointer",
              wordWrap: "initial",
              fontWeight: "bold",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            {theme.store}
          </h1>
          <WishlistIcon
            style={{
              ...theme.css.iconBorder,
              float: "right",
            }}
          />
          <CartIcon
            style={{
              ...theme.css.iconBorder,
              float: "right",
            }}
          />
          <OrderIcon
            style={{
              ...theme.css.iconBorder,
              float: "right",
            }}
          />
          <Users />
        </div>
      </Container>
    </section>
  );
};
