import { useNavigate } from 'react-router-dom';

import Icon from '@/components/common/Icon';
import * as S from './Header.styles';

interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  // props로 받은 text를 Title 안에 넣어줌
  const navigate = useNavigate();
  const goToBack = () => {
    // 뒤로가기 버튼 클릭시 이전 페이지로 이동
    navigate(-1);
  };
  return (
    <S.HeaderContainer>
      <S.IconBox onClick={goToBack}>
        <Icon name="IconArrowLeft" color="brand" />
      </S.IconBox>
      <S.Title>{text}</S.Title>
    </S.HeaderContainer>
  );
}

export default Header;
