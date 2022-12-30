//import the styled package from emotion/styled
import styled from "@emotion/styled";

import bus from "./Asserts/Illustration.svg";
import logo from "./Asserts/Logo.svg";
import logo1 from "./Asserts/Logo1.svg";

function App() {
  const Container = styled.section``;
  const MainContent = styled.main`
    display: flex;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }
  `;
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100px;
    padding-left: 3%;
    @media (max-width: 1024px) {
      background-color: #355b3e;
      width: 100%;
      display: flex;
      justify-content: center;
      padding-left: 0%;
    }
  `;

  const Logo = styled.img`
    @media (max-width: 1024px) {
      display: none;
    }
  `;

  const Logo1 = styled.img`
    display:none @media (max-width:1024px) {
      display: block;
    }
  `;
  const BrandName = styled.h1`
    color: #355b3e;
    font-size: 22px;
    font-weight: 700;
    @media (max-width: 1024px) {
      color: white;
      padding-left: 2%;
    }
  `;
  const Text = styled.section`
    padding-top: 2%;
    padding-left: 3%;
  `;

  const HeaderText = styled.h3`
    color: #355b3e;
    width:80%;
    font-size: 21px;
    font-weight: 700;
    margin-top: 2%;
    line-height: 36px;
    @media (max-width: 1024px) {
      font-size: 19px;
    }
  `;
  const HeaderWelcomeMessage = styled.p`
    color: #58745e;
    font-size: 13.5px;
  `;
  const Form = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  `;

  const Label = styled.label`
    color: #355b3e;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2%;
  `;
  const Input = styled.input`
    width: 422px;
    height: 46px;
    border: 1px solid #b8d6bf;
    border-radius: 8px;
    margin-bottom: 5%;
    padding: 0% 2%;
    cursor: text;
    @media (max-width: 1024px) {
      width: 345px;
    }
  `;
  const Options = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #355b3e;
    font-size: 14.5px;
    @media (max-width: 1024px) {
      font-size: 14px;
      width: 355px;
    }
  `;
  const CheckboxInput = styled.input`
    background-color: #355b3e;
    margin-top: 2%;
    width: 14px;
    height: 14px;
    cursor: pointer;
  `;
  const ForgotPassword = styled.p`
    text-decoration: underline;
  `;
  const CallToAction = styled.section`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
      width: 355px;
    }
  `;

  const Button = styled.button`
    width: 180px;
    height: 48px;
    border-radius: 8px;
    border: 0px;
    margin-top: 8%;
    background-color: white;
    color: #029664;
    border: 1px solid #029664;
    cursor: pointer;
    @media (max-width: 1024px) {
      width: 160px;
    }
  `;
  const ButtonLogin = styled.button`
    width: 180px;
    height: 48px;
    border-radius: 8px;
    border: 0px;
    margin-top: 8%;
    background-color: #029664;
    color: white;
    cursor: pointer;
    @media (max-width: 1024px) {
      width: 160px;
    }
  `;
  const UnorderedList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5% 0%;
    font-size: 14.5px;
    color: #355b3e;
    cursor: pointer;
    @media (max-width: 1024px) {
      width: 355px;
    }
  `;
  const List = styled.li`
    list-style: none;
    font-weight: 600;
  `;

  const Listparagraph = styled.p`
    @media (max-width: 1024px) {
      display: none;
    }
  `;
  const Image = styled.img`
    width: 100%;
    padding-left: 5%;
    @media (max-width: 1024px) {
      width: 100%;
      height: 10%;
      padding-left: -0%;
    }
  `;
  const ImgContainer = styled.div`
    width: 70%;
    margin-top: -10%;
    @media (max-width: 1024px) {
      margin-top: -0%;
      width: 100%;
    }
  `;
  return (
    <Container>
      <Nav>
        <Logo src={logo} alt="Logo" />
        <Logo1 src={logo1} alt="Logo1" />
        <BrandName>Travalizer</BrandName>
      </Nav>

      <MainContent>
        <Text>
          <header>
            <HeaderText>
              Artificial Intelligence giving you travel recommendations
            </HeaderText>
            <HeaderWelcomeMessage>
              Welcome Back, Please login to your account
            </HeaderWelcomeMessage>
          </header>

          <Form>
            <Label>Email</Label>
            <Input required type="email" placeholder="enter your email" />
            <Label>Password</Label>
            <Input required type="password" placeholder="enter your password" />

            <Options>
              <label>
                <CheckboxInput type="checkbox" />
                Remember me
              </label>
              <ForgotPassword>Forgot password?</ForgotPassword>
            </Options>

            <CallToAction>
              <ButtonLogin>Login</ButtonLogin>
              <Button>Sign Up</Button>
            </CallToAction>
          </Form>

          <footer>
            <UnorderedList>
              <Listparagraph>or login with </Listparagraph>
              <List>Facebook</List>
              <List>Linked In</List>
              <List>Google</List>
            </UnorderedList>
          </footer>
        </Text>

        <ImgContainer>
          <Image src={bus} alt="a bus" />
        </ImgContainer>
      </MainContent>
    </Container>
  );
}
export default App;
