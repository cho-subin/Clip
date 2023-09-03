import styled from '@emotion/styled';

import { DeleteIcon as _DeleteIcon } from '@/components/icons/DeleteIcon.tsx';

export const ImageUploadWrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
`;

export const ImagePreviewWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ImageInput = styled.input`
  visibility: hidden;
  position: absolute;
`;

export const ImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border: 3px dashed gray;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 0.5rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

export const DeleteIcon = styled(_DeleteIcon)`
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
`;
