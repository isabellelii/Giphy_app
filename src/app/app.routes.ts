import { TrendingComponent } from './trending/trending.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

export const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'search', component: SearchComponent }
];
