import { styled } from "styled-components";

import logo from "../assets/Logo.svg";

import { HiMiniMapPin } from "react-icons/hi2";
import { MdShoppingCart } from "react-icons/md";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  padding: 32px 0;
  @media (max-width: 575px) {
    padding: 0px 12px;
    padding-top: 15px;
    justify-content: space-between;
    width: 90%;
    height: auto;
  }
`;

const LogoHeader = styled.img`
  width: 100%;
  height: 30px;
`;

const ContentBtnsHeader = styled.div`
  display: flex;
  height: 30px;
`;

const BtnLocal = styled.button`
  border-radius: 6px;
  width: 200px;
  color: #4b2995;
  border: none;
  background: #ebe5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  > i {
    margin-top: 3px;
    margin-right: 5px;
  }
  @media (max-width: 575px) {
    display: none;
  }
`;

const BtnCart = styled.button`
  margin-left: 5px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  color: #c47f17;
  background: #f1e9c9;
  text-align: center;
  > svg {
    margin-top: 5px;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <div>
        <LogoHeader src={logo}></LogoHeader>
      </div>
      <ContentBtnsHeader>
        <BtnLocal>
          <i>
            <HiMiniMapPin />
          </i>
          São Paulo, SP
        </BtnLocal>
        <BtnCart>
          <MdShoppingCart />
        </BtnCart>
      </ContentBtnsHeader>
    </Header>
  );
};

export default Navbar;
