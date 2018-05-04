import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SegmentsPage } from '../segments/segments';
import { InfiniteScrollPage } from '../infinite-scroll/infinite-scroll';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  segmentsPage = SegmentsPage;
  scrollPage = InfiniteScrollPage;

  constructor() {

  }
}
