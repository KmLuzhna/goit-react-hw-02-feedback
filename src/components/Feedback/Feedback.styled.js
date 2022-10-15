import styled from "styled-components";
export const Button = styled.button`
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;

  :hover {
  background: #f3f2f5;
  box-shadow: 0 15px 20px #f3f2f5;
  transform: translateY(-7px);
}
`
