import { Component, OnInit } from '@angular/core';
import { TreeLayoutComponentBase, TreeNode } from '../layouts/tree-layout/tree-layout.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groupsData: TreeNode[] = [
    {
      data: "Group 1",
      children: [
        { data: "User 1" },
        { data: "User 2" },
        { data: "User 3" }
      ]
    },
    {
      data: "Group 2",
      children: [
        { data: "User 4" },
      ]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
