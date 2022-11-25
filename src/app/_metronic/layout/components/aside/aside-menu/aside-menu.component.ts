import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { AuthService } from '../../../../../modules/auth/services/auth.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
  appAngularVersion: string = environment.appVersion;
  appPreviewChangelogUrl: string = environment.appPreviewChangelogUrl;
    currentUser: any;

  constructor(private service: AuthService
) { }
  get isAdminStructure() {
    this.currentUser = this.service.getRole();
    return this.currentUser && this.currentUser.role === "AdminStructure";
  }
  get isCoach() {
    this.currentUser = this.service.getRole();
    return this.currentUser && this.currentUser.role === "Coach";
  }
  get isAdminClient() {
    this.currentUser = this.service.getRole();
    return this.currentUser && this.currentUser.role === "AdminClient";
  }
  get isPartenaire() {
    this.currentUser = this.service.getRole();
    return this.currentUser && this.currentUser.role === "Partenaire";
  }

  ngOnInit(): void {}
}
