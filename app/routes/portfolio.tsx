import type { Route } from './+types/home';
import { Portfolio as PortfolioPage } from '~/pages/portfolio';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'CodeHeart Software, LLC' }, { name: 'description', content: 'Our Portfolio' }];
}

export default function Portfolio() {
  return <PortfolioPage />;
}
