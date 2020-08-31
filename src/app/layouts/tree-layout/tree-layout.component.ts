import { Component, OnInit, Input } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FlatNode {
  expandable: boolean;
  data: any;
  level: number;
}

export interface TreeNode {
  data: any;
  children?: TreeNode[];
}

@Component({
  selector: 'app-tree-layout',
  templateUrl: './tree-layout.component.html',
  styleUrls: ['./tree-layout.component.css']
})
export class TreeLayoutComponentBase implements OnInit {

  @Input() treeData: TreeNode[];

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = this.treeData;
  }

  //#region tree control

  private _transformer = (node: TreeNode, level: number) => {
    return <FlatNode> {
      expandable: !!node.children && node.children.length > 0,
      data: node.data,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;

  //#endregion
}
