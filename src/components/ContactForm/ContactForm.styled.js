import styled from 'styled-components';

export const Form = styled.form`
  box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);
  background-color: rgb(245, 255, 251);
  padding: 25px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex;
  gap: 25px;
  width: 300px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const BoxSection = styled.form`
  box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);
  background-color: rgb(245, 255, 251);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 25px;
  min-width: 200px;
  position: relative;
`;

export const TwoSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
  }
`;

export const Add = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  font-size: 40px;
  padding-bottom: 1px;
  padding-right: 4.5px;
  color: white;
  background-color: rgb(0, 137, 123);
  border-radius: 50%;
  border-style: none;
  transition: transform 0.2s;
  transition: font-size 0.2s;

  &:hover {
    box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: 900;
  padding-bottom: 4px;
  padding-right: 5.5px;
  color: rgb(0, 137, 123);
  background-color: white;
  border-radius: 50%;
  border: 1px solid rgb(0, 137, 123);

  &:hover {
    box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);
  }
`;

export const BackGround = styled.div`
  padding: 10px 30px 30px 30px;
  border-radius: 5px;
  background-color: rgb(220, 255, 252);
  position: relative;
`;
