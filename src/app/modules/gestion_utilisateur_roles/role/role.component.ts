import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from './services/role.service';
import { Role} from './role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  roles: any;
  deg: any;
  role: Role;
  res: any;

  roleId: any;
  cond = false;
  constructor(private service: RoleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showroles();
  }

  showroles() {
    this.roles = this.service.listrole().
      subscribe((role) => {
        this.roles = role;
        this.res = this.roles.Roles.data;
        console.log(this.res);
      });
  }

  delete(id: any) {
    console.log(id);
    this.service.delete(id).subscribe(
      () => {
        this.res = this.res.filter((myV: { id: any; }) => myV.id != id);
        console.log(this.res);
      }); this.cond = false;
  }

  add(rolename: string, roledescription: string) {
    this.deg = {
      name: rolename,
      description: roledescription,
    };
    this.service.addrole(this.deg).subscribe((role) => {
      this.res = [role.Role, ...this.res];
      console.log(this.res);
    });
  }

  update() {
    this.service.update(this.roleId, this.roles).subscribe((data) => {
      console.log(this.roles);
      this.res = this.res.filter((myV: any) => myV.id != this.roleId || myV.id == this.roleId);
      this.cond = false;
    });
  }

  edit(roleI: number) {
    this.roleId = roleI;
    this.service.find(roleI).subscribe((res: any) => {
      this.roles = res.degrees;
      console.log(this.roles);
    });
    this.cond = true;
  }
}
