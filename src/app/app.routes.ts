import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostsComponent } from './posts/posts.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { RewardsComponent } from './rewards/rewards.component';

export const routes: Routes = [
    {'path': '',component:MainPageComponent},
    {'path': 'login', component:LoginPageComponent},
    {'path': 'posts', component:PostsComponent},
    {'path': 'giftcards', component:GiftCardComponent},
    {'path': 'rewards', component:RewardsComponent}
];
