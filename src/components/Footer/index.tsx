import * as S from './styles';

export const Footer: React.FC = () => {

  return (
    <S.Container>
      <S.BlockAbout>
        <span>By Felipe Oliveira</span>
        <div className="links">
          <button>A</button>
          <button>B</button>
        </div>
      </S.BlockAbout>
      <S.Separator />
      <S.BlockAbout>
        <span>© 2022 - 2023 Equipe Foto do Zinho.</span>
        <div className="links">
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
        </div>
      </S.BlockAbout>
    </S.Container>
  );
};
