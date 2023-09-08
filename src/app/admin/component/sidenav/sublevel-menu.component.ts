import { Component, Input } from '@angular/core';
import { INavItem } from './helper';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul
      *ngIf="collapsed && data.items && data.items.length > 0"
      class="sublevel-nav"
      [@submenu]="
        expanded
          ? {
              value: 'visible',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '*'
              }
            }
          : {
              value: 'hidden',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '0'
              }
            }
      "
    >
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a
          class="sublevel-nav-link"
          *ngIf="item.items && item.items.length > 0"
          (click)="handleClick(item)"
        >
          <i [class]="item.icon"></i>
          <span class="sublevel-link-label" *ngIf="collapsed">{{
            item.label
          }}</span>
          <i
            *ngIf="item.items && collapsed"
            class="menu-collapse-icon"
            [ngClass]="
              !item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-donw'
            "
          >
          </i>
        </a>

        <a
          class="sublevel-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          routerLink="{{ item.routerlink }}"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <i [class]="item.icon"></i>
          <span class="sublevel-link-label" *ngIf="collapsed">{{
            item.label
          }}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded"
            [data]="item"
          ></app-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('submenu', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
          overflow: 'visible',
        })
      ),
      transition('visible <=> hidden', [
        style({
          overflow: 'hidden',
        }),
        animate('{{transitionParams}}'),
      ]),
      transition('void => *', animate(0)),
    ]),
  ],
})
export class SublevelMenuComponent {
  @Input() data: INavItem = {
    routerlink: '',
    icon: '',
    label: '',
    expanded: false,
    items: [],
  };
  @Input() collapsed = false;
  @Input() animation: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  handleClick(item: any) {
    if (this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItems of this.data.items) {
          if (item !== modelItems && modelItems.expanded) {
            modelItems.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
}