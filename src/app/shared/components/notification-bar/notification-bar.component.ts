import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent {

  public c1: number = 5;
  public c2: number = 2;
  public c3: number = 6;
  public c4: number = 8;

  notifications = [
    {
      "iconUrl": "./assets/img/ico-indicios_procesar.svg",
      "notificationCount": 5,
      "redirectUrl": "https://example.com/page1",
      "order": 1,
      "tooltip": "You have 5 new messages"
    },
    {
      "iconUrl": "./assets/img/ico-indicios_procesar.svg",
      "notificationCount": 0,
      "redirectUrl": "https://example.com/page2?param=value",
      "order": 2,
      "tooltip": "No new notifications"
    },
    {
      "iconUrl": "./assets/img/ico-indicios_procesar.svg",
      "notificationCount": 3,
      "redirectUrl": "https://example.com/page3",
      "order": 3,
      "tooltip": "You have 3 pending tasks"
    },
    {
      "iconUrl": "./assets/img/ico-indicios_procesar.svg",
      "notificationCount": 5,
      "redirectUrl": "https://example.com/page4",
      "order": 4,
      "tooltip": "You have 5 pending tasks"
    }
  ]

}
