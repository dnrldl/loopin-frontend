import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Heart,
  Search,
  Settings,
  User,
} from 'lucide-react';

type IconName =
  | 'arrowLeft'
  | 'arrowRight'
  | 'heart'
  | 'settings'
  | 'search'
  | 'user'
  | 'chevronLeft';

const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  heart: Heart,
  settings: Settings,
  search: Search,
  user: User,
  chevronLeft: ChevronLeft,
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const Icon = ({ name, size = 20, className = '' }: IconProps) => {
  const LucideIcon = icons[name];
  return <LucideIcon size={size} className={className} />;
};

export default Icon;
