import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #a1c487;
  outline: transparent;

  &: focus {
    border-color: rgb(224, 160, 31);
  }

  &: hover {
    border-color: rgb(224, 160, 31);
  }
`;

export const AddContactBtn = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #a1c487;
  cursor: pointer;
`;
