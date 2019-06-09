import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = [];
  usersCopy:any = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
      this.usersCopy = users;
    });
  }

  filterUsers(searchTxt: HTMLInputElement) {
    this.users = this.usersCopy.filter(u => {
      var name = u.name;
      var company = u.company.name;
      var website = u.website;
      var address = u.address.suite + " " + u.address.street + " " + u.address.city + u.address.zipcode;

      if (name.search(searchTxt.value) !== -1 || company.search(searchTxt.value) !== -1 || website.search(searchTxt.value) !== -1 || address.search(searchTxt.value) !== -1) {
        return true;
      }
      return false;
    });
  }
}
