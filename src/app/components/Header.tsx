import BackButton from '@/app/components/BackButton';

export interface HeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  backButton?: boolean;
}

const Header = ({
  left,
  center = 'Loopin',
  right,
  backButton,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 flex h-13 items-center justify-between bg-green-500 px-4 py-2">
      {/* <div>{backButton ? <button>뒤로</button> : left}</div> */}
      {/* 왼쪽 영역 */}
      <div className="flex flex-1 justify-start">
        {backButton ? <BackButton /> : left || <div className="w-6" />}
      </div>

      {/* 중앙 제목 */}
      <div className="absolute left-1/2 max-w-[60%] -translate-x-1/2 transform truncate text-center text-lg font-semibold">
        {center}
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex flex-1 justify-end">
        {right || <div className="w-6" />}
      </div>
    </header>
  );
};

export default Header;
